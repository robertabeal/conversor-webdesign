var link_contraste_preto = document.querySelector('#contraste_preto')
var todasAsTags = document.querySelectorAll('*')

link_contraste_preto.addEventListener('click', function () {
  for (let i = 0; i < todasAsTags.length; i++) {
    let tag = todasAsTags[i]

    if (tag.nodeName == 'A') {
      tag.style.backgroundColor = 'white'
      tag.style.color = 'black'
    } else {
      tag.style.backgroundColor = 'black'
      tag.style.color = 'white'
    }
  }
})

tamanho = 16;
function diminuir() {
  tamanho--;
  document.body.style.fontSize = tamanho + "px";
}
function aumentar() {
  tamanho++;
  document.body.style.fontSize = tamanho + "px";
}


// binário para decimal
function converterBinDec() {
  const number = document.querySelector('#number').value
  const span = document.querySelector('.display')

  let decimal = 0
  let idx = 0

  for (let index = number.length; index >= 0; index--) {
    let n = parseInt(number[index - 1]);

    if (n == 1) {
      x = 1 * Math.pow(2, idx)

      decimal += x
    }

    idx++
  }

  span.innerHTML = decimal
}


// decimal para binário
function converterDecBin() {
  // Pega o número da tela
  const number = parseInt(document.querySelector('#number').value)
  // Converte de texto para inteiro
  const span = document.querySelector('.display')
  let divisao = parseInt(number)
  let binario = ''

  // loop até que o resultado da divisão seja 0
  while (true) {
    let resto = divisao % 2
    divisao = parseInt(divisao / 2)
    binario = resto + binario

    // Condição de parada 
    if (divisao == 0) {
      break
    }

  }

  span.innerHTML = binario
}



//octal para decimal 
function converterOctDec() {
const octal = parseInt(document.querySelector('#number').value);
const span = document.querySelector('.display');

span.innerHTML = (parseInt(octal,8)); 
}



// decimal para octal 
function converterDecOct() {
  // Pega o número da tela 
  const number = parseInt(document.querySelector('#number').value)
  // Converte de texto para inteiro
  const span = document.querySelector('.display')
  let divisao = parseInt(number)
  let octal = ''

  // loop até que o resultado da divsão seja 0 
  while (true) {
    let resto = divisao % 8
    divisao = parseInt(divisao / 8)
    octal = resto + octal

    // Condição de parada
    if (divisao == 0) {
      break
    }
  }
  span.innerHTML = octal
}


// decimal para hexadecimal 
function converterDecHex() {
  let number = parseInt(document.querySelector('#number').value)
  const span = document.querySelector('.display');
  let hexadecimalStr = number.toString(16);

  span.innerHTML = hexadecimalStr
}







// hexadecimal para decimal
function converterHexDec(hex) {
  return parseInt(hex, 16);
  let hexadecimalStr = parseInt(document.querySelector('#number').value)
  const span = document.querySelector('.display');
  let decimal = hexToDec(hexadecimalStr, 16);
  
 
  span.innerHTML = decimal
} 





