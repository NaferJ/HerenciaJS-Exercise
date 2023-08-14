# HerenciaJS-Exercise
Lunes 14 de Agosto del 2023

## Exercise number 1

1.  const personas = [];:
        Se crea un array llamado personas para almacenar la información de las personas registradas.

2. let idCounter = 1;:
        Se inicializa una variable idCounter con el valor 1. Esta variable se utilizará para asignar identificadores únicos a cada persona registrada.

3. function registrarEmpleado(nombre, apellido, edad, sueldo) { ... }:
        Esta función permite registrar un empleado en el sistema.
        Se crea un objeto empleado con las propiedades: id, tipo, nombre, apellido, edad y sueldo.
        El id se genera utilizando idCounter y luego se incrementa para el siguiente registro.
        El objeto empleado se agrega al array personas y se muestra un mensaje de confirmación en la consola.

4. function registrarCliente(nombre, apellido, edad, fechaRegistro) { ... }:
        Esta función permite registrar un cliente en el sistema.
        Se crea un objeto cliente con las propiedades: id, tipo, nombre, apellido, edad y fechaRegistro.
        Al igual que con los empleados, el id se genera y se incrementa.
        El objeto cliente se agrega al array personas y se muestra un mensaje de confirmación en la consola.

5. function consultarPersonas() { ... }:
        Esta función muestra en la consola la información de todas las personas registradas.
        Se itera sobre el array personas y se muestra el id, tipo, nombre, apellido y edad.
        Si la persona es un empleado, se muestra también el sueldo.
        Si la persona es un cliente, se muestra la fechaRegistro.
        Se muestra un separador --- después de cada persona.

6. registrarEmpleado("John", "Doe", 30, 50000);:
        Se llama a la función registrarEmpleado para registrar un empleado con los valores proporcionados.

7.  registrarCliente("Jane", "Smith", 25, "2023-08-14");:
        Se llama a la función registrarCliente para registrar un cliente con los valores proporcionados.

8. consultarPersonas();:
        Finalmente, se llama a la función consultarPersonas para mostrar la información de todas las personas registradas.
