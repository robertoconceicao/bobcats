CREATE TABLE IF NOT EXISTS `girlsdb`.`egrldadossujeito` (
  `cdDadossujeito` INT(11) NOT NULL,
  `tpPele` VARCHAR(45) NULL DEFAULT NULL COMMENT '1 - Clara\\n2 - Morena\\n3 - Mulata\\n4 - Negra',
  `nuAltura` VARCHAR(45) NULL DEFAULT NULL,
  `nuPeso` VARCHAR(45) NULL DEFAULT NULL,
  `tpCabelo` VARCHAR(45) NULL DEFAULT NULL,
  `tpAtendimento` VARCHAR(45) NULL DEFAULT NULL COMMENT '1 - Só Homens\\n2 - Só Mulheres\\n3 - Homens e Mulheres\\n4 - Casais',
  `nmFantasia` VARCHAR(45) NULL DEFAULT NULL,
  `tpInteresse` VARCHAR(45) NULL DEFAULT NULL COMMENT '1 - Homens\\n2 - Mulheres\\n3 - Homens/Mulheres',
  `deHorariodisponibilidade` VARCHAR(45) NULL DEFAULT NULL,
  `cdSujeito` INT(11) NOT NULL,
  PRIMARY KEY (`cdDadossujeito`),
  INDEX `fk_egrlDadossujeito_egrlSujeito_idx` (`cdDadossujeito` ASC),
  INDEX `fk_egrldadossujeito_egrlsujeito1_idx` (`cdSujeito` ASC),
  CONSTRAINT `fk_egrldadossujeito_egrlsujeito1`
    FOREIGN KEY (`cdSujeito`)
    REFERENCES `girlsdb`.`egrlsujeito` (`cdSujeito`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
