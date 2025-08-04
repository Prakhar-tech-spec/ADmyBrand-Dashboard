
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { Campaign } from '@/components/datatable/columns';

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
        scale: 2,
        backgroundColor: null
    });
    return canvas.toDataURL('image/png');
};

export const generatePdf = async (campaignData: Campaign[]) => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    let yPos = margin;

    // Title
    pdf.setFontSize(22);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Marketing Performance Report', pdfWidth / 2, yPos, { align: 'center' });
    yPos += 15;

    // Charts
    const chartIds = [
        'sales-line-chart', 
        'revenue-bar-chart', 
        'traffic-source-pie-chart', 
        'campaign-channel-chart',
        'customer-segmentation-chart'
    ];

    const chartImages = await Promise.all(chartIds.map(id => captureChartAsImage(id)));

    const chartWidth = pdfWidth - 2 * margin;
    const chartHeight = 80;

    chartImages.forEach((imageData, index) => {
        if (yPos + chartHeight > pdfHeight - margin) {
            pdf.addPage();
            yPos = margin;
        }

        const chartTitle = chartIds[index].replace(/-/g, ' ').replace('chart', 'Chart').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        pdf.text(chartTitle, margin, yPos);
        yPos += 8;

        pdf.addImage(imageData, 'PNG', margin, yPos, chartWidth, chartHeight);
        yPos += chartHeight + 15;
    });

    // Campaign Performance Table
    pdf.addPage();
    yPos = margin;

    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Campaign Performance Data', margin, yPos);
    yPos += 10;

    pdf.autoTable({
        startY: yPos,
        head: [['Campaign Name', 'Channel', 'Impressions', 'Clicks', 'CTR', 'Conversions']],
        body: campaignData.map(c => [c.campaignName, c.channel, c.impressions, c.clicks, c.ctr, c.conversions]),
        theme: 'striped',
        headStyles: { fillColor: [41, 128, 185] },
        styles: { fontSize: 8 },
        margin: { left: margin, right: margin }
    });

    // Save the PDF
    pdf.save('marketing-report.pdf');
};
