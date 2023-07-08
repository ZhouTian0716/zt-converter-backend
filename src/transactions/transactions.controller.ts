import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}
  @Get()
  getTransactions() {
    return this.transactionService.getTransactions();
  }

  @Post()
  createTransaction(@Body() dto: CreateTransactionDto) {
    return this.transactionService.createTransaction(dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteTransactionById(@Param('id', ParseIntPipe) id: number) {
    return this.transactionService.deleteTransactionById(id);
  }
}
