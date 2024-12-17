-- CreateEnum
CREATE TYPE "TransactionPlatform" AS ENUM ('INSTAGRAM', 'FACEBOOK', 'WEB');

-- CreateEnum
CREATE TYPE "TransactionCategory" AS ENUM ('MARKETING', 'PAID_TRAFFIC');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "platform" "TransactionPlatform" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "category" "TransactionCategory" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
