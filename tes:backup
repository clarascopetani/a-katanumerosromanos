
var numerosRomanos = {
  1: 'I',
  4: 'IV',  
  5: 'V',
  9: 'IX', 
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

var numeroRomano;

function arabicoARomano(numero) {
  var romano = buscarValor(numero);
  return romano;
} 

// FUNCION BUSCAR VALOR EN ARRAY
function buscarValor(numero)  {
  numeroRomano = Object.keys(numerosRomanos);
  var numOriginal = numero;
  var posicion = parseInt(masCercanoMenor(numero))
  var romano = numerosRomanos[posicion]
  
  if(posicion == numOriginal){
    return romano
  } else {
    var romano = buscarValorEspecial(numero,posicion,numOriginal)
    return romano
  }
 
}  

// FUNCION BUSCAR VALOR ESPECIAL EN ARRAY
function buscarValorEspecial(numero,posicion,numOriginal){
  console.log('-----------Entro en especial',numero,posicion)

  romano = numerosRomanos[posicion]
  var modulo = numero%posicion
  var resto = numero-posicion
  var concatenado = [];

  if(numero > posicion && modulo == 0){
    resto = parseInt(masCercanoMenor(resto))
    var numero = numOriginal/resto
    var nuevoRomano = concatenar(numero,romano);
    concatenado.push(nuevoRomano)
    return nuevoRomano
  } 

  if(numero > posicion && modulo >= 1){
    concatenado.push(romano)
    console.log('esto tengoconcatenado', concatenado)
    var restoOriginal = resto
    resto = parseInt(masCercanoMenor(resto))
    romano = numerosRomanos[resto]

    console.log('esto es el romano mas cercano de resto', resto, romano, 'resto original ',restoOriginal)

    var nuevoNumero = Math.floor(restoOriginal/resto)
    console.log('esto es nuevoNumero', nuevoNumero)

    var nuevoRomano = concatenar(nuevoNumero,romano);
    console.log('esto tengoconcatenado', concatenado)

    concatenado.push(nuevoRomano)
    romano = concatenado.join('')
    console.log('esto tengoconcatenado', romano)

    return romano

  } 
}

// FUNCION BUSCAR MAS CERCANO MENOR
function masCercanoMenor(numero){
  var arr = [];
  numeroRomano.find(function(element) {
    var el = element <= numero
    if(el == true){
      arr.push(element)
    }
  });
  var masCercano = arr.pop()
  return masCercano
}

// FUNCION CONCATENAR
function concatenar(numero,romano){
  var concatenado =[];
  for(i = 0; i < numero; i++){
    concatenado.push(romano)
  }
  concatenado = concatenado.join('');
  romano = concatenado
  return romano
}