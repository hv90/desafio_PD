-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema discos_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema discos_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `discos_db` DEFAULT CHARACTER SET utf8 ;
USE `discos_db` ;

-- -----------------------------------------------------
-- Table `discos_db`.`discos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `discos_db`.`discos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `Artista` VARCHAR(255) NULL DEFAULT NULL,
  `Album` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;

