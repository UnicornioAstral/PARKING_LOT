

-- -----------------------------------------------------
-- Table mydb.DESCUENTOS
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.DESCUENTOS (
  id INT NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(150) NOT NULL,
  porcentaje DECIMAL NOT NULL,
  valor_fijo DECIMAL NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  MEMBRESIAS_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_DESCUENTOS_MEMBRESIAS1
    FOREIGN KEY (MEMBRESIAS_id)
    REFERENCES mydb.MEMBRESIAS (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;


CREATE UNIQUE INDEX valor_fijo_UNIQUE ON mydb.DESCUENTOS (valor_fijo ASC) VISIBLE;

CREATE INDEX fk_DESCUENTOS_MEMBRESIAS1_idx ON mydb.DESCUENTOS (MEMBRESIAS_id ASC) VISIBLE;
