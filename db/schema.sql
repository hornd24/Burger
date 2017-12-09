

use burgers_db;

CREATE TABLE burgers (
      id int AUTO_INCREMENT,
      burger_name VARCHAR(45),
      devoured boolean,
      date TIMESTAMP NOT NULL,
      PRIMARY KEY(id)
);

