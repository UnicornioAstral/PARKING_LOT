

-- -----------------------------------------------------
-- Table mydb.TARIFAS
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.TARIFAS (
  id INT NOT NULL,
  tipo_vehiculo VARCHAR(45) NOT NULL,
  tiempo DATETIME NOT NULL,
  precio DECIMAL NOT NULL,
  MEMBRESIAS_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_TARIFAS_MEMBRESIAS1
    FOREIGN KEY (MEMBRESIAS_id)
    REFERENCES mydb.MEMBRESIAS (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;


CREATE INDEX fk_TARIFAS_MEMBRESIAS1_idx ON mydb.TARIFAS (MEMBRESIAS_id ASC) VISIBLE;

