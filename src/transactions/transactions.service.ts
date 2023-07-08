import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}
  getTransactions() {
    return this.prisma.transaction.findMany();
  }

  async createTransaction(dto: CreateTransactionDto) {
    const transaction = await this.prisma.transaction.create({
      data: dto,
    });

    return transaction;
  }

  async deleteTransactionById(transactionId: number) {
    const target = await this.prisma.transaction.findUnique({
      where: {
        id: transactionId,
      },
    });

    if (!target) {
      throw new NotFoundException('Delete failed, transaction not found');
    }

    await this.prisma.transaction.delete({
      where: {
        id: transactionId,
      },
    });
  }
}
