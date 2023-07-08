-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sourceCurrency" TEXT NOT NULL,
    "sourceAmount" DECIMAL(20,2) NOT NULL,
    "targetCurrency" TEXT NOT NULL,
    "targetAmount" DECIMAL(20,2) NOT NULL,
    "fee" DECIMAL(20,2) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
