

-- -----------------------------------------------------
-- Table mydb.INGRESO_SALIDA
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.INGRESO_SALIDA (
  id INT NOT NULL,
  fecha_hora_entrada DATETIME NOT NULL,
  fecha_hora_salida DATETIME NULL,
  puerta VARCHAR(45) NOT NULL,
  placa VARCHAR(45) NOT NULL,
  tiempo_total INT NOT NULL,
  motivo_bloqueo VARCHAR(150) NULL,
  VEHICULO_id INT NOT NULL,
  PRIMARY KEY (id, VEHICULO_id),
  CONSTRAINT fk_INGRESO_SALIDA_VEHICULO1
    FOREIGN KEY (VEHICULO_id)
    REFERENCES mydb.VEHICULO (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
)
ENGINE = InnoDB;


CREATE INDEX fk_INGRESO_SALIDA_VEHICULO1_idx ON mydb.INGRESO_SALIDA (VEHICULO_id ASC) VISIBLE;
