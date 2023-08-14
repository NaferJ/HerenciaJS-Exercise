const personas = [];
let idCounter = 1;

function registrarEmpleado(nombre, apellido, edad, sueldo) {
  const empleado = {
    id: idCounter++,
    tipo: 'Empleado',
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    sueldo: sueldo
  };
  
  personas.push(empleado);
  console.log('Empleado registrado:', empleado);
}

function registrarCliente(nombre, apellido, edad, fechaRegistro) {
  const cliente = {
    id: idCounter++,
    tipo: 'Cliente',
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    fechaRegistro: fechaRegistro
  };
  
  personas.push(cliente);
  console.log('Cliente registrado:', cliente);
}

function consultarPersonas() {
  if (personas.length === 0) {
    console.log('No hay personas registradas.');
  } else {
    console.log('Personas registradas:');
    personas.forEach((persona) => {
      console.log(`ID: ${persona.id}, Tipo: ${persona.tipo}, Nombre: ${persona.nombre}, Apellido: ${persona.apellido}, Edad: ${persona.edad}`);
      if (persona.tipo === 'Empleado') {
        console.log(`Sueldo: ${persona.sueldo}`);
      } else if (persona.tipo === 'Cliente') {
        console.log(`Fecha de registro: ${persona.fechaRegistro}`);
      }
      console.log('---');
    });
  }
}

registrarEmpleado("John", "Doe", 30, 50000);
registrarCliente("Jane", "Smith", 25, "2023-08-14");
consultarPersonas();
