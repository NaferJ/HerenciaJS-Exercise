# HerenciaJS-Exercise
Lunes 14 de Agosto del 2023

## Exercise number 1
Este código simula un sistema simple de registro y consulta de personas con diferentes roles (empleados y clientes), con propiedades específicas para cada uno, y un identificador único para cada registro.

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

## Exercise number 2
Este código simula un sistema simple de gestión de productos y órdenes, permitiendo crear productos, agregar productos a órdenes y mostrar la información de una orden específica.

1. const productos = [];:
        Se crea un array llamado productos para almacenar la información de los productos creados.

2. let idProductoCounter = 1;:
        Se inicializa una variable idProductoCounter con el valor 1. Esta variable se utilizará para asignar identificadores únicos a cada producto.

3. const ordenes = [];:
        Se crea un array llamado ordenes para almacenar la información de las órdenes creadas.

4. let idOrdenCounter = 1;:
        Se inicializa una variable idOrdenCounter con el valor 1. Esta variable se utilizará para asignar identificadores únicos a cada orden.

5. function crearProducto(nombre, precio) { ... }:
        Esta función permite crear un producto con un nombre y un precio.
        Se crea un objeto producto con las propiedades: id, nombre y precio.
        El objeto producto se agrega al array productos y se muestra un mensaje de confirmación en la consola.

6. function agregarProductoAOrden(ordenId, productoId, cantidad) { ... }:
        Esta función permite agregar un producto a una orden existente o crear una nueva orden si no existe.
        Se busca el producto con productoId en el array productos.
        Si el producto no se encuentra, se muestra un mensaje de error.
        Se busca la orden con ordenId en el array ordenes. Si no se encuentra, se crea una nueva orden.
        Se agrega el producto a la orden junto con la cantidad.
        Se actualizan los totales de productos y precio de la orden.

7. function mostrarOrden(ordenId) { ... }:
        Esta función muestra en la consola la información de una orden específica.
        Se busca la orden con ordenId en el array ordenes.
        Si la orden no se encuentra, se muestra un mensaje de error.
        Se muestra el ID de la orden, la lista de productos con sus cantidades, y los totales de productos y precio.

8. Se crean dos productos usando crearProducto.

9. Se agrega el producto de ID 1 (Camiseta) dos veces y el producto de ID 2 (Pantalón) una vez a la orden de ID 1 usando agregarProductoAOrden.

10. Se muestra la información de la orden de ID 1 usando mostrarOrden.