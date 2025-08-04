
'use server';
/**
 * @fileOverview An AI flow for generating marketing forecasts.
 *
 * - generateForecast - A function that generates a forecast based on marketing data.
 * - GenerateForecastInput - The input type for the generateForecast function.
 * - GenerateForecastOutput - The return type for the generateForecast function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const CampaignSchema = z.object({
  campaignName: z.string(),
  channel: z.string(),
  impressions: z.number(),
  clicks: z.number(),
  ctr: z.string(),
  conversions: z.number(),
  startDate: z.string(),
});

const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  company: z.string(),
  role: z.string(),
  status: z.string(),
  createdAt: z.string(),
});

const AlertSchema = z.object({
  id: z.string(),
  timestamp: z.string(),
  alertType: z.string(),
  message: z.string(),
  severity: z.string(),
  status: z.string(),
});

const GenerateForecastInputSchema = z.object({
  campaigns: z.array(CampaignSchema),
  customers: z.array(CustomerSchema),
  alerts: z.array(AlertSchema),
});
export type GenerateForecastInput = z.infer<typeof GenerateForecastInputSchema>;

const GenerateForecastOutputSchema = z.object({
  title: z.string().describe('A catchy title for the forecast.'),
  summary: z
    .string()
    .describe(
      'A multi-sentence summary of the forecast including key trends, predictions, and recommendations.'
    ),
});
export type GenerateForecastOutput = z.infer<
  typeof GenerateForecastOutputSchema
>;

const ForecastPromptInputSchema = z.object({
    campaignsString: z.string(),
    customersString: z.string(),
    alertsString: z.string(),
});

const forecastPrompt = ai.definePrompt({
  name: 'generateForecastPrompt',
  input: { schema: ForecastPromptInputSchema },
  output: { schema: GenerateForecastOutputSchema },
  prompt: `You are a forecasting expert for a digital advertising agency.
  Your task is to analyze the provided marketing data and generate a forecast for the upcoming period.

  Analyze the following data:
  - Campaign Performance: {{{campaignsString}}}
  - Customer Data: {{{customersString}}}
  - Recent Alerts: {{{alertsString}}}

  Based on this data, provide a concise forecast. The forecast should include:
  1. A short, catchy title.
  2. A summary (2-3 sentences) that identifies key trends, predicts future performance (e.g., revenue, user growth, campaign success), and offers one actionable recommendation.

  Focus on high-level trends and insights. Be realistic but optimistic.
  For example: "Q3 Revenue Surge Expected, Driven by 'Summer Sale' Campaign Success. Recommend re-investing in lookalike audiences on Facebook."
  `,
});

const generateForecastFlow = ai.defineFlow(
  {
    name: 'generateForecastFlow',
    inputSchema: GenerateForecastInputSchema,
    outputSchema: GenerateForecastOutputSchema,
  },
  async (input) => {
    const { output } = await forecastPrompt({
        campaignsString: JSON.stringify(input.campaigns),
        customersString: JSON.stringify(input.customers),
        alertsString: JSON.stringify(input.alerts),
    });
    return output!;
  }
);

export async function generateForecast(
  input: GenerateForecastInput
): Promise<GenerateForecastOutput> {
  return generateForecastFlow(input);
}
