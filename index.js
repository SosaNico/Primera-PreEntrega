// SIMULADOR INTERACTIVO
class Producto {
    constructor(marca, modelo, estado) {
        this.marca = marca.toUpperCase();
        this.modelo = modelo;
        this.estado = estado;
    }
}
let infoCotizacion = [];
let nombreCliente = userName();
let marcaAutomotor = mostrarMenu();
let dinero = precios(marcaAutomotor);
cotizacion(marcaAutomotor, dinero, nombreCliente);
formaPago();

function agregarProductos() {
    let numeroVehiculos = parseInt(prompt("¿Cuantos vehículos desea cotizar?"));
        for (let index = 0; index < numeroVehiculos; index++) {
            let marca = prompt("Ingrese la marca del vehículo");
            let modelo = prompt("Ingrese el modelo del vehículo");
            let estado = prompt("Ingrese el estado del vehículo");
            let vehiculoCotizado = new Producto (marca, modelo, estado);
            infoCotizacion.push(vehiculoCotizado);
        }
        return infoCotizacion;
}

function mostrarCotizaciones(infoCotizacion){
    console.log(infoCotizacion)
    return infoCotizacion
}

function userName(){
    alert("¡Bienvenido! a 'Sosa Seguros'");
    let nombre = prompt("Ingrese su nombre:");
    while (nombre === ''){
        nombre = prompt("Ingrese su nombre:");
    }
    alert("Hola " + nombre.toUpperCase() +"\nTe voy a peticionar que me indiques la marca del vehículo a asegurar");
    return nombre;
}

function mostrarMenu(){
    let opcion;
    while(opcion !== "ESC"){
        opcion = parseInt(prompt("Bienvenido, seleccione una opción:\n1) Volkswagen\n2) Chevrolet\n3) Fiat\n4) Renault"));
        switch (opcion){
            case 1:
                return "Volkswagen";
            case 2:
                return "Chevrolet";
            case 3:
                return "Fiat";
            case 4:
                return "Renault";
        }
    }    
}

function precios(opcion){
    if (opcion === "Volkswagen"){
        return 5000;
    }else if (opcion === "Chevrolet"){
        return 4500;
    }else if (opcion === "Fiat"){
        return 4000;
    }else if (opcion === "Renault"){
        return 3500;
    }
}

function cotizacion(marca, dinero, nombre){
    alert(
        nombre.toUpperCase() + ", seleccionaste: " + marca + " y tiene un costo mensual de $ " + dinero + " pesos");
}

function formaPago(){
    alert("Seleccione la forma de pago:");
    let pago;
    while(pago !== "ESC"){
        pago = parseInt(prompt("1) Efectivo\n2) Transferencia\n3) Tarjeta"));
        switch(pago) {
            case 1:
                    alert(`El precio final es de ${dinero}`)
                    agregarCotizacion();
                return "Efectivo";
            case 2:
                    alert(`El precio es de ${dinero}`);
                        resta(dinero, descuento(dinero, 0.10));
                        agregarCotizacion();
                return "Descuento del 10%";
            case 3:
                    alert(`El precio es de ${dinero}`);
                        suma(dinero, recargo(dinero, 0.10))
                        agregarCotizacion();
                return "Recargo del 10%";
        }
    }
}

function agregarCotizacion(){
    let nuevaCotizacion;
    while(nuevaCotizacion !== 2){
        nuevaCotizacion = parseInt(prompt("¿Desea cotizar otro vehiculo?\nSeleccione una numero:\n1)Si\n2)No"));
        switch(nuevaCotizacion){
            case 1:
                mostrarCotizaciones(agregarProductos());
                return
            case 2:
                alert("¡Gracias por su cotización en Sosa Seguros, que tenga un buen día!");
                break;
        }
    }
}

function descuento(valor1, valor2){
    let descuento = valor1 * valor2;
        alert(`Tienes un descuento de ${descuento} por seleccionar este forma de pago`);
    return descuento;
}

function recargo(valor1, valor2){
    let recargo = valor1 * valor2
        alert(`Tienes un recargo de ${recargo} por seleccionar este forma de pago`);
    return recargo;
}

function resta(valor1, valor2){
    let precioFinal = valor1 - valor2;
        alert(`El precio final seria de ${precioFinal}`);
    return precioFinal;
}

function suma(valor1, valor2){
    let precioFinal = valor1 + valor2;
        alert(`El precio final seria de ${precioFinal}`);
    return precioFinal;
}