CREATE DATABASE beats_db;
USE beats_db;

CREATE TABLE beats (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  price_id VARCHAR(255) NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO beats (title, price_id, base64audio)
VALUES 
("Cold Blooded - Iziche Beats", "price_1OUHRTAVvQlWf9Ivl7WaJWwL", "C:/Users/rayha/Music/Cold Blooded - Iziche Beats.mp3"),
("Changes - Iziche beats", "price_1OUM7oAVvQlWf9IvxOzajxBg", "C:/Users/rayha/Music/Changes - Iziche Beats.mp3");