

import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { Campaign } from '@/components/datatable/columns';
import { ToasterRef } from '@/components/ui/toast';
import { Progress } from '@/components/ui/progress';
import React from 'react';

declare module 'jspdf' {
    interface jsPDF {
        autoTable: (options: any) => jsPDF;
    }
}

const captureChartAsImage = async (elementId: string): Promise<string> => {
    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error(`Element with id ${elementId} not found`);
    }
    const canvas = await html2canvas(element, { 
        logging: false,
        useCORS: true,
        scale: 1.5,
        backgroundColor: null
    });
    return canvas.toDataURL('image/png', 0.9);
};

export const generatePdf = async (campaignData: Campaign[], toasterRef: React.RefObject<ToasterRef>) => {
    
    let toastId: string | number | undefined;

    const updateProgress = (progress: number, message: string) => {
        const toastContent = (
            <div>
                <p>{message}</p>
                <Progress value={progress} className="mt-2" />
            </div>
        );

        if (toastId) {
            toasterRef.current?.update(toastId, {
                title: "Generating Report...",
                message: toastContent,
                duration: 999999
            });
        } else {
            toastId = toasterRef.current?.show({
                title: "Generating Report...",
                message: toastContent,
                duration: 999999
            });
        }
    };
    
    try {
        updateProgress(0, 'Initializing...');
        
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const margin = 15;
        let yPos = margin;

        pdf.setFontSize(22);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Marketing Performance Report', pdfWidth / 2, yPos, { align: 'center' });
        yPos += 15;

        const chartIds = [
            'sales-line-chart', 
            'revenue-bar-chart', 
            'traffic-source-pie-chart',
            'customer-segmentation-chart',
            'campaign-channel-chart',
        ];
        
        const chartImages = [];
        for (let i = 0; i < chartIds.length; i++) {
            updateProgress( (i / chartIds.length) * 80, `Capturing chart ${i + 1} of ${chartIds.length}...`);
            const image = await captureChartAsImage(chartIds[i]);
            chartImages.push(image);
        }
        
        updateProgress(90, 'Adding charts to PDF...');
        const chartWidth = (pdfWidth - 3 * margin) / 2;
        const chartHeight = 80;

        pdf.addImage(chartImages[0], 'PNG', margin, yPos, chartWidth, chartHeight);
        pdf.addImage(chartImages[1], 'PNG', margin + chartWidth + margin, yPos, chartWidth, chartHeight);
        yPos += chartHeight + 10;
        
        pdf.addImage(chartImages[2], 'PNG', margin, yPos, chartWidth, chartHeight);
        pdf.addImage(chartImages[3], 'PNG', margin + chartWidth + margin, yPos, chartWidth, chartHeight);
        yPos += chartHeight + 10;
        
        const fullWidthChartWidth = pdfWidth - 2 * margin;
        const fullWidthChartHeight = 90;
        
        if (yPos + fullWidthChartHeight > pdfHeight - margin) {
            pdf.addPage();
            yPos = margin;
        }
        
        pdf.addImage(chartImages[4], 'PNG', margin, yPos, fullWidthChartWidth, fullWidthChartHeight);
        yPos += fullWidthChartHeight + 10;

        if (yPos > pdfHeight - 80) {
            pdf.addPage();
            yPos = margin;
        }

        pdf.setFontSize(18);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Campaign Performance Data', margin, yPos);
        yPos += 10;

        updateProgress(95, 'Adding table data...');
        pdf.autoTable({
            startY: yPos,
            head: [['Campaign Name', 'Channel', 'Impressions', 'Clicks', 'CTR', 'Conversions']],
            body: campaignData.map(c => [c.campaignName, c.channel, c.impressions, c.clicks, c.ctr, c.conversions]),
            theme: 'striped',
            headStyles: { fillColor: [41, 128, 185] },
            styles: { fontSize: 8 },
            margin: { left: margin, right: margin }
        });

        updateProgress(100, 'Download starting...');
        pdf.save('marketing-report.pdf');
        
        if(toastId) toasterRef.current?.dismiss(toastId);

        toasterRef.current?.show({
            title: "Report Generated",
            message: "Your report has been downloaded.",
            variant: "success",
        });


    } catch (error) {
        console.error("Failed to generate PDF:", error);
        if(toastId) toasterRef.current?.dismiss(toastId);
        toasterRef.current?.show({
            title: "Error Generating Report",
            message: "There was a problem generating the PDF. Please try again.",
            variant: "error",
        });
    }
};
