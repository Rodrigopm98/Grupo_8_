CREATE DATABASE IF NOT EXISTS `gloriososClub_db`;
USE `gloriososClub_db`;


CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `firstName` VARCHAR(50) NOT NULL,
   `lastName` VARCHAR(50) NOT NULL,
   `userName` VARCHAR(50) NOT NULL,
   `email` VARCHAR(50) NOT NULL,
   `birthdate` DATE NOT NULL,
   `province` VARCHAR(50),
   `city` VARCHAR(100),
   `address` VARCHAR(100),
   `profileImage` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `role` VARCHAR(50) NOT NULL,
   `deleted` TINYINT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sizes` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `size` VARCHAR(20) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `brand` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `description` TEXT NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `discount` TINYINT,
   `price` INT,
   `sportId` INT,
   `userId` INT NOT NULL,
   `brandId` INT,
   `sizeId` INT,
   `genre` VARCHAR(50),
   `categoryId` INT,
   `deleted` TINYINT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `category` VARCHAR(50),
   PRIMARY KEY (`id`)
);

CREATE TABLE `sports` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `sport` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_4263e74c-6975-4ef2-929d-b7270fc982ed` FOREIGN KEY (`userId`) REFERENCES `users`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_d20cf6b5-42cb-407d-a996-eb45ecb52919` FOREIGN KEY (`sportId`) REFERENCES `sports`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_a8e0efca-ae7e-4061-a4e3-8b1cf3a4dc4d` FOREIGN KEY (`brandId`) REFERENCES `brands`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_fdf11265-9d7a-49c2-afa8-632df9803849` FOREIGN KEY (`sizeId`) REFERENCES `sizes`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_d86307e2-1dbf-43cf-9ec5-639de28da0e9` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`)  ;
