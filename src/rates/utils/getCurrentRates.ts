import axios, { AxiosResponse } from 'axios';
import { ExchangeRatesResponse } from './constants';

const baseUrl = 'https://openexchangerates.org/api';

// Step 1: Get the exchange rate
export const getCurrentRates = async (): Promise<ExchangeRatesResponse> => {
  const response: AxiosResponse<ExchangeRatesResponse> =
    await axios.get<ExchangeRatesResponse>(
      `${baseUrl}/latest.json?app_id=${process.env.OPEN_EXCHANGE_RATES_API_KEY}`,
    );
  return response.data;
};
