import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CurrencyOption } from '../../rates/utils/constants';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  sourceCurrency: CurrencyOption;

  @IsNumber()
  sourceAmount: number;

  @IsString()
  @IsNotEmpty()
  targetCurrency: CurrencyOption;

  @IsNumber()
  targetAmount: number;

  @IsNumber()
  fee: number;
}
