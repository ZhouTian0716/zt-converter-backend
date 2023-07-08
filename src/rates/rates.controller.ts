import { Controller, Get, Param } from '@nestjs/common';
import { RatesService } from './rates.service';
import { CurrencyOption } from 'src/rates/utils/constants';

@Controller('rates')
export class RatesController {
  constructor(private ratesService: RatesService) {}

  @Get(':src')
  getConvertRates(@Param('src') srcCurrency: CurrencyOption) {
    return this.ratesService.getSelectedSourceRates(srcCurrency);
  }
}
