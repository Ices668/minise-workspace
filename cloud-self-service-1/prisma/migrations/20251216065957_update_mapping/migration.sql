/*
  Warnings:

  - You are about to drop the `datacategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `serverapplication` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `serverapplicationdatacategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `datacategory` DROP FOREIGN KEY `DataCategory_parentId_fkey`;

-- DropForeignKey
ALTER TABLE `server` DROP FOREIGN KEY `Server_applicationId_fkey`;

-- DropForeignKey
ALTER TABLE `serverapplication` DROP FOREIGN KEY `ServerApplication_userId_fkey`;

-- DropForeignKey
ALTER TABLE `serverapplicationdatacategory` DROP FOREIGN KEY `ServerApplicationDataCategory_dataCategoryId_fkey`;

-- DropForeignKey
ALTER TABLE `serverapplicationdatacategory` DROP FOREIGN KEY `ServerApplicationDataCategory_serverApplicationId_fkey`;

-- DropTable
DROP TABLE `datacategory`;

-- DropTable
DROP TABLE `serverapplication`;

-- DropTable
DROP TABLE `serverapplicationdatacategory`;

-- CreateTable
CREATE TABLE `data_category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `parentId` INTEGER NULL,
    `secrecyLevel` ENUM('PUBLIC', 'INTERNAL', 'CONFIDENTIAL', 'TOP_SECRET') NOT NULL DEFAULT 'PUBLIC',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `server_application` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `cpu` INTEGER NOT NULL,
    `memory` INTEGER NOT NULL,
    `gpu` BOOLEAN NOT NULL,
    `storage` INTEGER NOT NULL,
    `duration` INTEGER NOT NULL,
    `reason` VARCHAR(191) NULL,
    `status` ENUM('PENDING', 'APPROVED', 'REJECTED', 'EXPIRED') NOT NULL DEFAULT 'PENDING',
    `extensionDays` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `server_application_data_cat` (
    `serverApplicationId` INTEGER NOT NULL,
    `dataCategoryId` INTEGER NOT NULL,

    PRIMARY KEY (`serverApplicationId`, `dataCategoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data_category` ADD CONSTRAINT `data_category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `data_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `server_application` ADD CONSTRAINT `server_application_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `server_application_data_cat` ADD CONSTRAINT `server_application_data_cat_serverApplicationId_fkey` FOREIGN KEY (`serverApplicationId`) REFERENCES `server_application`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `server_application_data_cat` ADD CONSTRAINT `server_application_data_cat_dataCategoryId_fkey` FOREIGN KEY (`dataCategoryId`) REFERENCES `data_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Server` ADD CONSTRAINT `Server_applicationId_fkey` FOREIGN KEY (`applicationId`) REFERENCES `server_application`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
