import { Injectable } from '@nestjs/common';
import { getCurrentRates } from './utils/getCurrentRates';
import { CurrencyOption, Rates } from './utils/constants';

@Injectable()
export class RatesService {
  async getSelectedSourceRates(srcCurrency: CurrencyOption) {
    const currentRatesRes = await getCurrentRates();
    const { rates, base } = currentRatesRes;
    let targetRates: Rates = rates;

    if (srcCurrency === base) {
      targetRates = rates;
    } else {
      const baseRate = rates[srcCurrency];
      Object.keys(rates).forEach((currency: CurrencyOption) => {
        const rate = rates[currency];
        const convertedRate = rate / baseRate;
        targetRates[currency] = convertedRate;
      });
    }
    return targetRates;
  }
}
