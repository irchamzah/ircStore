/*
  Warnings:

  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL;
