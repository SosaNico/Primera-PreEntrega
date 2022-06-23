// SIMULADOR INTERACTIVO

//VARIABLES

let nombreCliente = userName();
let marcaAutomotor = mostrarMenu();
let dinero = precios(marcaAutomotor);
cotizacion(marcaAutomotor, dinero, nombreCliente);
formaPago();

// FUNCIONES

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
                alert(`El precio final es de ${dinero}`);
                return "Efectivo";
            case 2:
                alert(`El precio es de ${dinero}`);
                
                formula3(dinero, formula1(dinero, 0.10));
                return "Descuento del 10%";
            case 3:
                alert(`El precio es de ${dinero}`);
                formula4(dinero, formula2(dinero, 0.10))
                return "Recargo del 10%";
        }
    }
}

function formula1(valor1, valor2){

    let descuento = valor1 * valor2;

    alert(`Tienes un descuento de ${descuento} por seleccionar este forma de pago`);

    return descuento;
}
function formula2(valor1, valor2){

    let recargo = valor1 * valor2

    alert(`Tienes un recargo de ${recargo} por seleccionar este forma de pago`);

    return recargo;
}
function formula3(valor1, valor2){

    let precioFinal = valor1 - valor2;

    alert(`El precio final seria de ${precioFinal}`);

    return precioFinal;
}
function formula4(valor1, valor2){

    let precioFinal = valor1 + valor2;

    alert(`El precio final seria de ${precioFinal}`);

    return precioFinal;
}