-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`autores` (
    `idautores` INT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(75) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `imagen` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`idautores`),
    UNIQUE INDEX `idautores_UNIQUE` (`idautores` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`posts` (
    `idposts` INT NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(50) NOT NULL,
    `descripcion` VARCHAR(75) NOT NULL,
    `fecha_creacion` DATE NOT NULL,
    `categoria` VARCHAR(45) NOT NULL,
    `idautor` INT NOT NULL,
    PRIMARY KEY (`idposts`),
    UNIQUE INDEX `idposts_UNIQUE` (`idposts` ASC) VISIBLE,
    INDEX `fk_posts_autores_idx` (`idautor` ASC) VISIBLE,
    CONSTRAINT `fk_posts_autores`
        FOREIGN KEY (`idautor`)
        REFERENCES `mydb`.`autores` (`idautores`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- Insert autores de prueba
INSERT INTO `mydb`.`autores` (`nombre`, `email`, `imagen`) VALUES
('Juan Pérez', 'juan.perez@email.com', 'juan.jpg'),
('María López', 'maria.lopez@email.com', 'maria.jpg'),
('Carlos García', 'carlos.garcia@email.com', 'carlos.jpg'),
('Ana Torres', 'ana.torres@email.com', 'ana.jpg'),
('Luis Fernández', 'luis.fernandez@email.com', 'luis.jpg'),
('Sofía Martínez', 'sofia.martinez@email.com', 'sofia.jpg'),
('Miguel Sánchez', 'miguel.sanchez@email.com', 'miguel.jpg'),
('Laura Gómez', 'laura.gomez@email.com', 'laura.jpg'),
('Pedro Ruiz', 'pedro.ruiz@email.com', 'pedro.jpg'),
('Elena Díaz', 'elena.diaz@email.com', 'elena.jpg');

-- Insert posts de prueba (autores repetidos)
INSERT INTO `mydb`.`posts` (`titulo`, `descripcion`, `fecha_creacion`, `categoria`, `idautor`) VALUES
('Primer Post', 'Descripción del primer post', '2024-06-01', 'Tecnología', 1),
('Segundo Post', 'Descripción del segundo post', '2024-06-02', 'Ciencia', 2),
('Tercer Post', 'Descripción del tercer post', '2024-06-03', 'Arte', 3),
('Cuarto Post', 'Descripción del cuarto post', '2024-06-04', 'Historia', 1),
('Quinto Post', 'Descripción del quinto post', '2024-06-05', 'Deportes', 2),
('Sexto Post', 'Descripción del sexto post', '2024-06-06', 'Música', 3),
('Séptimo Post', 'Descripción del séptimo post', '2024-06-07', 'Viajes', 4),
('Octavo Post', 'Descripción del octavo post', '2024-06-08', 'Cocina', 5),
('Noveno Post', 'Descripción del noveno post', '2024-06-09', 'Educación', 1),
('Décimo Post', 'Descripción del décimo post', '2024-06-10', 'Salud', 2);