CREATE DATABASE projectNandur 
    DEFAULT CHARACTER SET = utf8mb4;
CREATE TABLE dataNandur(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    moisture FLOAT NOT NULL
) COMMENT '';
CREATE TABLE dataUser(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    experiencePoint INT NOT NULL,
) COMMENT '';