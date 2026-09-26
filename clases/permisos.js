

-- -----------------------------------------------------
-- Table mydb.PERMISOS
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.PERMISOS (
  id INT NOT NULL,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB;


CREATE UNIQUE INDEX nombre_UNIQUE ON mydb.PERMISOS (nombre ASC) VISIBLE;
