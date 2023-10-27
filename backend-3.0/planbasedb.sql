-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema planbasedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema planbasedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `planbasedb` DEFAULT CHARACTER SET utf8 ;
USE `planbasedb` ;

-- -----------------------------------------------------
-- Table `planbasedb`.`perfil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `planbasedb`.`perfil` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NULL,
  `nomeCompleto` VARCHAR(50) NULL,
  `cargo` VARCHAR(50) NULL,
  `avatar` VARCHAR(255) NULL,
  `bio` VARCHAR(255) NULL,
  `telefone` VARCHAR(20) NULL,
  `email` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
