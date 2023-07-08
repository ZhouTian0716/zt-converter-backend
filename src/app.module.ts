import { Module } from '@nestjs/common';
import { TransactionsModule } from './transactions/transactions.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { RatesModule } from './rates/rates.module';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    RatesModule,
    TransactionsModule,
    AuthModule,
    PrismaModule,
  ],
})
export class AppModule {}
