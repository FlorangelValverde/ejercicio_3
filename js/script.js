var nombre = prompt("Introduzca su Nombre:");
var edad = prompt("Introduzca su edad:");
var salario = prompt("Introduzca su Salario:");
salario = Number(salario);
var salar;
if(edad >= 16 && edad <= 18) {
    salar = salario;
    alert(nombre + " con " + edad + " cobra " + salario + " + 0% = " + salar);
}
else if(edad >= 19 && edad <= 50) {
    salar = salario + ((salario * 5)/100);
    alert(nombre + " con " + edad + " cobra " + salario + " + 5% = " + salar);
}
else if(edad >= 51 && edad <= 60) {
    salar = salario + ((salario * 10)/100);
    alert(nombre + " con " + edad + "cobra " + salario + " + 10% = " + salar);
}
else if(edad > 60) {
    salar = salario + ((salario * 15)/100);
    alert(nombre + " con " + edad + "  cobra " + salario + " + 15% = " + salar);
}
else if(edad < 16) {
    alert("No tienes edad para trabajar");
}