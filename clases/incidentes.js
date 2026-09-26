

-- -----------------------------------------------------
-- Table mydb.INCIDENTES
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.INCIDENTES (
  id INT NOT NULL,
  descripcion TEXT NOT NULL,
  fecha DATETIME NULL,
  VEHICULO_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_INCIDENTES_VEHICULO1
    FOREIGN KEY (VEHICULO_id)
    REFERENCES mydb.VEHICULO (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;


CREATE UNIQUE INDEX fecha_UNIQUE ON mydb.INCIDENTES (fecha ASC) VISIBLE;

CREATE INDEX fk_INCIDENTES_VEHICULO1_idx ON mydb.INCIDENTES (VEHICULO_id ASC) VISIBLE;