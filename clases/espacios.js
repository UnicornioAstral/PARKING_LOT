

-- -----------------------------------------------------
-- Table mydb.ESPACIOS
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.ESPACIOS (
  id INT NOT NULL,
  codigo VARCHAR(55) NOT NULL,
  tipo ENUM('carro', 'moto') NOT NULL,
  estado ENUM('activo', 'inactivo') NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB;


CREATE UNIQUE INDEX codigo_UNIQUE ON mydb.ESPACIOS (codigo ASC) VISIBLE;

