// SIMULADOR INTERACTIVO
class Producto {
    constructor(marca, precio) {
        this.marca = marca;
        this.precio = precio;
    }
}

const auto1 = new Producto("Volkswagen", 5000);
const auto2 = new Producto("Chevrolet", 4500);
const auto3 = new Producto("Fiat", 4000);
const auto4 = new Producto("Renault", 3500);

const filtrado = [];
let datosDeSeguro = 0;
let infoCotizacion = [];
let precioCotizacion = [];
let nombreCliente = userName();
let dinero = 0;
procesos();
filtrarResultado();

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
        opcion = parseInt(prompt("Seleccione una opción:\n1) Volkswagen\n2) Chevrolet\n3) Fiat\n4) Renault"));
        switch (opcion){
            case 1:
                infoCotizacion.push(auto1.marca);
                precioCotizacion.push(auto1.precio);
                dinero = 5000;
                filtrado.push(auto1);
                return;
            case 2:
                infoCotizacion.push(auto2.marca);
                precioCotizacion.push(auto2.precio);
                dinero = 4500;
                filtrado.push(auto2);
                return;
            case 3:
                infoCotizacion.push(auto3.marca);
                precioCotizacion.push(auto3.precio);
                dinero = 4000;
                filtrado.push(auto3);
                return;
            case 4:
                infoCotizacion.push(auto4.marca);
                precioCotizacion.push(auto4.precio);
                dinero = 3500;
                filtrado.push(auto4);
                return;
        }
    }    
}

function filtrarResultado(){
    const resultado = filtrado.filter((filtrado) => filtrado.marca.includes("Volkswagen"));
    console.log(resultado);
}


function cotizacion(marca, dinero, nombre){
    alert(
        nombre.toUpperCase() + ", seleccionaste: " + marca + " y tiene un costo mensual de $ " + dinero + " pesos");
}

function formaPago(){
    const pagos =["Efectivo","Transferencia","Tarjeta"];
    alert("Seleccione la forma de pago:");
    let pago;
    while(pago !== "ESC"){
        pago = parseInt(prompt("1)" + pagos[0] +"\n2)" + pagos[1] + "\n3)" + pagos[2]));
        switch(pago) {
            case 1:
                    alert(`El precio final es de ${dinero}`);
                return "Efectivo";
            case 2:
                    alert(`El precio final es de ${dinero}`);
                        resta(dinero, descuento(dinero, 0.10));
                return "Descuento del 10%";
            case 3:
                    alert(`El precio final es de ${dinero}`);
                        suma(dinero, recargo(dinero, 0.10));
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
                procesos();
                return;
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
    let recargo = valor1 * valor2;
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

function procesos(){
    mostrarMenu();
    cotizacion(infoCotizacion, precioCotizacion, nombreCliente);
    formaPago();
    concatenacion();
    infoCotizacion = [];
    precioCotizacion = [];
    agregarCotizacion();
}

function concatenacion(){
    datosDeSeguro = infoCotizacion.concat(precioCotizacion);
        console.log(datosDeSeguro);
}