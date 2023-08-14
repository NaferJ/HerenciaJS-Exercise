const productos = [];
let idProductoCounter = 1;

const ordenes = [];
let idOrdenCounter = 1;

function crearProducto(nombre, precio) {
  const producto = {
    id: idProductoCounter++,
    nombre: nombre,
    precio: precio
  };
  
  productos.push(producto);
  console.log('Producto creado:', producto);
}

function agregarProductoAOrden(ordenId, productoId, cantidad) {
  const producto = productos.find(prod => prod.id === productoId);
  if (!producto) {
    console.log('Producto no encontrado.');
    return;
  }

  let orden = ordenes.find(ord => ord.id === ordenId);
  if (!orden) {
    orden = {
      id: idOrdenCounter++,
      productos: [],
      totalProductos: 0,
      totalPrecio: 0
    };
    ordenes.push(orden);
  }

  orden.productos.push({ producto, cantidad });
  orden.totalProductos += cantidad;
  orden.totalPrecio += producto.precio * cantidad;

  console.log(`Producto '${producto.nombre}' agregado a la orden ${orden.id}. Cantidad: ${cantidad}`);
}

function mostrarOrden(ordenId) {
  const orden = ordenes.find(ord => ord.id === ordenId);
  if (!orden) {
    console.log('Orden no encontrada.');
    return;
  }

  console.log(`Orden #${orden.id}`);
  console.log('Productos:');
  orden.productos.forEach(item => {
    console.log(`- ${item.producto.nombre}, Cantidad: ${item.cantidad}`);
  });
  console.log(`Total de productos: ${orden.totalProductos}`);
  console.log(`Total de precio: ${orden.totalPrecio}`);
}

crearProducto('Camiseta', 20);
crearProducto('Pantalón', 30);
agregarProductoAOrden(1, 1, 2);
agregarProductoAOrden(2, 2, 1);
mostrarOrden(1);
mostrarOrden(2);
