
const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');
let resultado = document.getElementById('resultado');


function imc(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById( 'altura').value;
    let peso = document.getElementById('peso').value;
   

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC< 18.5){
            classificacao = 'Abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso Ideal.';
        } else if (valorIMC < 30){
            classificacao = 'com Sobrepeso.';
        } else if (valorIMC < 35){
            classificacao = 'com Obesidade I.';
        } else if (valorIMC < 40){
            classificacao = 'com Obesidade II.';
        } else if (valorIMC >= 40){
            classificacao = 'com Obesidade Mórbida.'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}, você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

function limpa(){
    resultado.textContent = '';
}

calcular.addEventListener('click', imc);
limpar.addEventListener('click', limpa);