//IF//
/*
let topping = "Kinder";
let precio = 25;
let helado = 30;
let precioFinal;

if (topping == "Oreo") {
    console.log("El precio del topping es de $10");
}

else if (topping == "KitKat") {
    console.log("El precio del topping es de $15");
}

else if (topping == "Kinder") {
    console.log("El precio del topping es de $25");
} else {
    console.log("No tenemos este topping");
}


function suma(){
    precioFinal = precio + helado;
}

suma();

console.log("El helado cuesta" + " $" + precioFinal)



//SWITCH CASE//


let expr = "hola"; 

switch(expr) {
    case "carne":
        console.log("Para acompañar Vino tinto");
        break;
    case "pescado":
        console.log("Para acompañar Vino Blanco");
        break;
    case "verduras":
        console.log("Para acompañar agua");
        break;
    default:
        console.log("Elija carne, pescado o verduras");
        break;
}

//FOR//

let topping = ["oreo","Kitkat","Kinder","Chocolate"];


topping.push("chispas");
topping.push("sirope");
topping.pop();


for (let i = 0; i < topping.length; i++) {
console.log("Los toppings son: " + topping[i]);

}

//WHILE//

let numero = 0;

while (numero < 11) {
    console.log("este numero es mas chico que 11: " + numero);

    numero++;
}


//PROMPT//

let usuario;
let listaUsuarios = [];
let bandera = true;


while(bandera) {
    usuario = prompt("ingresa tu nombre, 0 si quieres terminar");

    if(usuario == "0") {
        console.log("Bienvenida " + listaUsuarios);
        bandera = false;
    } else {
        listaUsuarios.push(usuario);
        console.log("Se agregó a " + usuario);
    }
}
*/