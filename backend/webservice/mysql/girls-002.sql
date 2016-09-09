CREATE TABLE IF NOT EXISTS `girlsdb`.`egrlsujeito` (
  `cdSujeito` INT(11) NOT NULL AUTO_INCREMENT,
  `cdUsuario` INT(11) NOT NULL,
  `cdmunicipio` INT(11) NOT NULL,
  `nmSujeito` VARCHAR(45) NULL DEFAULT NULL,
  `dtNascimento` VARCHAR(45) NULL DEFAULT NULL,
  `flSexo` VARCHAR(45) NULL DEFAULT NULL COMMENT 'M - Masculino\\nF - Feminino',
  `nuTelefone` VARCHAR(45) NULL,
  `deEmail` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`cdSujeito`),
  INDEX `fk_egrlsujeito_esegusuario1_idx` (`cdUsuario` ASC),
  INDEX `fk_egrlsujeito_epadmunicipio1_idx` (`cdmunicipio` ASC),
  CONSTRAINT `fk_egrlsujeito_esegusuario1`
    FOREIGN KEY (`cdUsuario`)
    REFERENCES `girlsdb`.`esegusuario` (`cdUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_egrlsujeito_epadmunicipio1`
    FOREIGN KEY (`cdmunicipio`)
    REFERENCES `girlsdb`.`epadmunicipio` (`cdmunicipio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
