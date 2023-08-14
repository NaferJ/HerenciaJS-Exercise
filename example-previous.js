class Banco {
  constructor(saldoInicial) {
    this.saldo = saldoInicial;
  }

  consultarSaldo() {
    return this.saldo;
  }

  sacarDinero(cantidad) {
    if (cantidad <= 0) {
      return "La cantidad debe ser mayor a cero.";
    }

    if (cantidad > this.saldo) {
      return "Saldo insuficiente.";
    }

    this.saldo -= cantidad;
    return `Retiraste ${cantidad} unidades. Nuevo saldo: ${this.saldo}`;
  }

  depositarDinero(cantidad) {
    if (cantidad <= 0) {
      return "La cantidad debe ser mayor a cero.";
    }

    this.saldo += cantidad;
    return `Depositaste ${cantidad} unidades. Nuevo saldo: ${this.saldo}`;
  }
}

const miBanco = new Banco(1000); // Inicializa el banco con un saldo de 1000 unidades

console.log("Saldo actual:", miBanco.consultarSaldo());

console.log(miBanco.sacarDinero(500)); // Intenta sacar 500 unidades

console.log(miBanco.depositarDinero(300)); // Deposita 300 unidades

console.log("Saldo actual:", miBanco.consultarSaldo());