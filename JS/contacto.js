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
   document.write ("Pensás que tenemos " + calculadora(num1, num2, operador) + " consultas diarias")
}
CuantasVecesTeAtendiste()
//QUE TENDRIA QUE HACER ACA PARA SACAR EL ALERT?
//NO ME MUESTRA ESTO EN LA WEB. 
const { value: text } = await Swal.fire({
    input: 'textarea',
    inputLabel: 'Ya te atendiste con nosotras?',
    inputPlaceholder: 'Escribí tu respuesta aca!',
    inputAttributes: {
      'aria-label': 'Escribí tu respuesta aca!'
    },
    showCancelButton: true
  })
  
  if (text) {
    Swal.fire(text)
  }
  Swal.fire({
    title: 'Cuántos años tenés?',
    icon: 'question',
    input: 'range',
    inputLabel: 'Tu edad',
    inputAttributes: {
      min: 16,
      max: 100,
      step: 1
    },
    inputValue: 25
  })
  const { value: accept } = await Swal.fire({
    title: 'Términos y condiciones',
    input: 'checkbox',
    inputValue: 1,
    inputPlaceholder:
      'Acepto los términos y condiciones',
    confirmButtonText:
      'Continuar <i class="fa fa-arrow-right"></i>',
    inputValidator: (result) => {
      return !result && 'Tenés que aceptar los T&C'
    }
  })
  
  if (accept) {
    Swal.fire('Aceptaste los T&C :)')
  }