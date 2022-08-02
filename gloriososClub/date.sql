/* para borrar tablas */

DELETE FROM gloriososclub_db.products;
ALTER TABLE gloriososclub_db AUTO_INCREMENT=1;

DELETE FROM gloriososclub_db.users;
ALTER TABLE gloriososclub_db AUTO_INCREMENT=1;

DELETE FROM gloriososclub_db.categories;
ALTER TABLE gloriososclub_db AUTO_INCREMENT=1;

DELETE FROM gloriososclub_db.sizes;
ALTER TABLE gloriososclub_db AUTO_INCREMENT=1;

DELETE FROM gloriososclub_db.sports;
ALTER TABLE gloriososclub_db AUTO_INCREMENT=1;

DELETE FROM gloriososclub_db.brands;
ALTER TABLE gloriososclub_db AUTO_INCREMENT=1;


/* contenido de las tablas */

/* SIZES */
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('1', '8');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('2', '9');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('3', 'XS');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('4', 'S');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('5', 'M');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('6', 'L');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('7', 'XL');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('8 ', 'XXL');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('9', '33');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('10', '34');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('11', '35');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('12', '36');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('13', '37');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('14', '38');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('15', '39');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('16', '40');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('17', '41');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('18', '42');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('19', '43');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('20', '44');
INSERT INTO `gloriososclub_db`.`sizes` (`id`, `size`) VALUES ('21', '45');


/* BRANDS */

INSERT INTO `gloriososclub_db`.`brands` (`id`,`brand`) VALUES (1,'Adidas');
INSERT INTO `gloriososclub_db`.`brands` (`id`,`brand`) VALUES (2,'Nike');
INSERT INTO `gloriososclub_db`.`brands` (`id`,`brand`) VALUES (3,'Everlast');
INSERT INTO `gloriososclub_db`.`brands` (`id`,`brand`) VALUES (4,'Umbro');
INSERT INTO `gloriososclub_db`.`brands` (`id`,`brand`) VALUES (5,'Puma');


/* CATEGORIES */

INSERT INTO `gloriososclub_db`.`categories` (`id`,`category`) VALUES (1,'Camisetas');
INSERT INTO `gloriososclub_db`.`categories` (`id`,`category`) VALUES (2,'Botines');
INSERT INTO `gloriososclub_db`.`categories` (`id`,`category`) VALUES (3,'Guantes');


/* Sports */

INSERT INTO `gloriososclub_db`.`sports` (`id`, `sport`) VALUES ('1', 'Básquet');
INSERT INTO `gloriososclub_db`.`sports` (`id`, `sport`) VALUES ('2', 'Fútbol');
INSERT INTO `gloriososclub_db`.`sports` (`id`, `sport`) VALUES ('3', 'Boxeo');



/* USERS */

INSERT INTO `gloriososclub_db`.`users` (`id`,`firstName`,`lastName`,`userName`,`email`,`birthdate`,`province`,`city`,`address`,`profileImage`,`password`,`role`,`deleted`) VALUES (1,'Rodrigo','Peralta','Rodrigo123','rodrigo@gmail.com','1998-10-27','Tucumán','Yerba Buena','Martín Fierro 1234','systemusers_94754.png','$2a$10$MXo6xTPFjFxNVj9lSNHBbOTJ1bUvwbBQyzEE2lrBw0URRBccKov8W','Usuario',0);
INSERT INTO `gloriososclub_db`.`users` (`id`,`firstName`,`lastName`,`userName`,`email`,`birthdate`,`province`,`city`,`address`,`profileImage`,`password`,`role`,`deleted`) VALUES (2,'Jorge','Deolivera','Jorge1234','jorge@gmail.com','1985-10-15','Buenos Aires','CABA','av.rivadavia 6585','systemusers_94754.png','$2a$10$XWUyZ0ignvbD6qcNDUYn0Oe2TrEQCD78VXTv4VVyTJAe30oGPBf/G','Usuario',0);


/* PRODUCTS */

INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (1,'Camiseta Basquet Argentina','Llevate la mítica camiseta de básquet y sentite el campeón olímpico. Este modelo fue utilizado por la generación dorada de básquet conformada por Manu Ginobili, Carlos Delfino, Fabricio Oberto, Luis Scola, entre otros. Vistiendo este modelo la Seleccion ganó la medalla dorada en Atenas 2004.¡Sentir la gloria, nunca fue tan fácil!','Camiseta Argentina Basquet 2004.png',10,8000,1,2,NULL,5,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (2,'Adidas Predator','Botines Adidas Predator','Adidas Predator.png',0,15000,2,1,1,11,'Niño',2,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (3,'Botines Adidas ','Botines Adidas X Dorados','Adidas x -17-3 fg dorado.png',5,21000,2,1,1,19,'Hombre',2,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (4,'Camiseta Argentina 86','Camiseta Selección Argentina de Fútbol 1986 titular','Argentina 1986 .png',0,9500,2,1,NULL,6,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (5,'Camiseta Argentina Suplente 1986','Camiseta Selección Argentina de Fútbol 1986 Suplente','Argentina 1986 alternativa .png',0,7400,2,1,1,6,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (6,'Camiseta Barcelona 1899','Camiseta Fútbol Barcelona 1899','Barcelona 1899.png',0,1500,2,1,NULL,5,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (7,'Camiseta Barcelona 2009','Camiseta Fútbol Barcelona 2009 Titular','Barcelona 2009.png',0,6000,2,1,2,3,'Niña',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (8,'Camiseta Real Madrid 2011','Camiseta Fútbol Real Madrid 2011 Titular','Real Madrid 2011.png',0,10000,2,1,1,6,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (9,'Camiseta Real Madrid 2004','Camiseta Fútbol Real Madrid 2004 Titular','Real Madrid 2004 .png',0,15000,2,1,1,3,'Niña',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (10,'Camiseta PSG 2020','Camiseta Fútbol PSG Suplente','Paris Saint Germain alternativa 2020.png',0,5000,2,1,NULL,7,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (11,'Camiseta 76 ers 2000','Camiseta Basquet Philadelphia 2000 Titular','Philadelphia 76 ers 2000.png',0,18700,1,1,NULL,5,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (12,'Camiseta Peñarol 2011','Camiseta Basquet Peñarol 2011','Peñarol 2011.png',0,8000,1,1,NULL,6,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (13,'Camiseta Toronto Raptors 1998','Camiseta Basquet Toronto Raptors 1998','Toronto Raptors 1998.png',10,10000,1,1,NULL,7,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (14,'Guantes Everlast Powerlock 14 16 Onzas','Guantes Box Everlast Powerlock 14 16 Onzas','Guantes Box Everlast Powerlock 14 16 Onzas.png',5,15690,3,2,3,5,NULL,3,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (15,'Camiseta Chicago Bulls 1995','Camiseta Basquet Chicago Bulls 1995','Chicago Bulls 1995.png',5,12000,1,2,NULL,6,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (16,'Camiseta Brasil Home 2019/20','Camiseta Nike Brasil Fútbol Stadium Home 2019/20','Camiseta Nike Brasil Stadium Home 201920.png',10,4999,1,2,2,6,'Hombre',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (17,'Guantes Boxeo Adidas Energy 200','Guantes Boxeo Adidas Energy 200 Box Kick Full Thai Mma','Guantes Boxeo adidas Energy 200 Box Kick Full Thai Mma.png',5,9990,3,2,1,6,NULL,3,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (18,'Botines de fútbol Predator 20.3 césped','Botines de fútbol Predator 20.3 césped natural seco','BOTINES DE FÚTBOL PREDATOR 20.3 CÉSPED NATURAL SECO.png',5,20000,2,2,1,15,'Mujer',2,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (19,'Camiseta Manchester United','Umbro Camiseta Fútbol Manchester United 1992-1994 Local','Umbro Camiseta Manchester United 1992-1994 Local .png',10,18000,2,2,4,5,'Mujer',1,0);
INSERT INTO `gloriososclub_db`.`products` (`id`,`name`,`description`,`image`,`discount`,`price`,`sportId`,`userId`,`brandId`,`sizeId`,`genre`,`categoryId`,`deleted`) VALUES (20,'Botines Ultra 3.3 FG/AG de fútbol juveniles','Botines Puma Ultra 3.3 FG/AG de fútbol juveniles','Botines Ultra 3.3 FGAG de fútbol juveniles.png',5,12000,2,1,5,9,'Niño',2,0);



