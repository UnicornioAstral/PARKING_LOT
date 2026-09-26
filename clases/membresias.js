

-- -----------------------------------------------------
-- Table mydb.MEMBRESIAS
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS mydb.MEMBRESIAS (
  id INT NOT NULL,
  tipo ENUM('Eco', 'Confort', 'Elite') NOT NULL,
  duracion DATE NOT NULL,
  precio DECIMAL NOT NULL,
  estado ENUM('Activo', 'Inactivo') NOT NULL,
  PRIMARY KEY (id)
)
ENGINE = InnoDB;