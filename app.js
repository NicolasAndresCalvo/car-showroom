const autos = require('./autos');

let concesionaria = {
  autos,
  buscarAuto: function(patente){
    return (autos.filter( car => car.patente === patente)).length != 0 ? autos.filter( car => car.patente === patente) : null
  },
  venderAuto: function(patente){
    this.buscarAuto(patente) != null ? this.buscarAuto(patente).vendido = true : null
  },
  autosParaLaVenta: function(){
    return autos.filter( auto => auto.vendido === false)
  },
  autosNuevos: function(){
    return this.autosParaLaVenta().filter( auto => auto.km < 100)
  },
  listaDeVentas: function(){
    return autos.filter( auto => auto.vendido == true).map( valor => valor.precio);
  },
  totalDeVentas: function(){
    return this.listaDeVentas().reduce( (estado, numero) => estado + numero, 0);
  },
  puedeComprar: function(auto, persona){
    return (auto.precio <= persona.capacidadDePagoTotal) && (persona.capacidadDePagoEnCuotas >= (auto.precio / auto.cuotas)) ? true : false
  },
  autosQuePuedeComprar: function(persona){
    return this.autosParaLaVenta().filter( car => this.puedeComprar(car, persona))
  }
};

/// MOCK UP SEVENTH AND EIGHTH METHOD ///
const persona = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 100000,
  capacidadDePagoTotal: 100000
}

const auto = {
  marca: "Ford",
  modelo: "Fiesta",
  precio: 150000,
  km: 200,
  color: "Azul",
  cuotas: 12,
  anio: 2019,
  patente: "APL123",
  vendido: false
}

/// RESPONSE FIRST METHOD ///
console.log(concesionaria.buscarAuto('APL123'));
/// RESPONSE SECOND METHOD ///
console.log(concesionaria.venderAuto('APL123'));
/// RESPONSE THIRD METHOD ///
console.log(concesionaria.autosParaLaVenta());
/// RESPONSE FOURTH METHOD ///
console.log(concesionaria.autosNuevos());
/// RESPONSE FIFTH METHOD ///
console.log(concesionaria.listaDeVentas());
/// RESPONSE SIXTH METHOD ///
console.log(concesionaria.totalDeVentas());
/// RESPONSE SEVENTH METHOD ///
console.log(concesionaria.puedeComprar(auto, persona));
/// RESPONSE EIGHTH METHOD ///
console.log(concesionaria.autosQuePuedeComprar(persona));