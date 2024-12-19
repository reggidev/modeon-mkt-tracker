/*
  Warnings:

  - The values [MARKETING,PAID_TRAFFIC] on the enum `TransactionCategory` will be removed. If these variants are still used in the database, this will fail.
  - The values [INSTAGRAM,FACEBOOK,WEB] on the enum `TransactionPlatform` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TransactionCategory_new" AS ENUM ('OFFLINE', 'ONLINE');
ALTER TABLE "Transaction" ALTER COLUMN "category" TYPE "TransactionCategory_new" USING ("category"::text::"TransactionCategory_new");
ALTER TYPE "TransactionCategory" RENAME TO "TransactionCategory_old";
ALTER TYPE "TransactionCategory_new" RENAME TO "TransactionCategory";
DROP TYPE "TransactionCategory_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "TransactionPlatform_new" AS ENUM ('SITE', 'EMAIL_MARKETING', 'SOCIAL_MEDIA', 'ECOMMERCE', 'PHYSICAL_STORE', 'OUTDOOR', 'TELEVISION');
ALTER TABLE "Transaction" ALTER COLUMN "platform" TYPE "TransactionPlatform_new" USING ("platform"::text::"TransactionPlatform_new");
ALTER TYPE "TransactionPlatform" RENAME TO "TransactionPlatform_old";
ALTER TYPE "TransactionPlatform_new" RENAME TO "TransactionPlatform";
DROP TYPE "TransactionPlatform_old";
COMMIT;
