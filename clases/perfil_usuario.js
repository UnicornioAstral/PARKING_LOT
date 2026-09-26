

-- -----------------------------------------------------
-- Table mydb.PERFIL_USUARIO
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.PERFIL_USUARIO (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB;

