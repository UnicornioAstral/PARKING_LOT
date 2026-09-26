

-- -----------------------------------------------------
-- Table mydb.RESTRICCION_PLACA
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.RESTRICCION_PLACA (
  id INT NOT NULL,
  tipo ENUM('carro', 'moto') NOT NULL,
  numero INT NOT NULL,
  dia VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB;