/*
  Warnings:

  - Made the column `createdat` on table `locations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `state` on table `locations` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `locations` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "locations" ALTER COLUMN "createdat" SET NOT NULL,
ALTER COLUMN "state" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL;
