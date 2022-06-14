alert("Cuantás consultas pensás que tenemos por día?")

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
            return 0;
    }
}

function CuantasVecesTeAtendiste() {
    let operador = prompt("+, -, * o /?")
    let num1 = Number (prompt("Ingresá el primer número"));
    let num2 = Number (prompt("Ingresá el segundo número"));
   alert ("Pensás que tenemos" + " "+ calculadora(num1, num2, operador) + " " + "consultas diarias")
}
CuantasVecesTeAtendiste()
