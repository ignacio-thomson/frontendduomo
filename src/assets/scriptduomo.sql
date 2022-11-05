-- Crear tabla personas.

create table persona (
id serial not null,
nombre varchar(255),
apellido varchar(255),
fecha_nacimiento date,
telefono varchar(20),
region varchar(255),
comuna varchar(255),
primary key (id)
);
