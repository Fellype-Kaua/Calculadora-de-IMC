function resultados() {
  // CALCULAR O IMC

  // DECLARAR A VARIAVEL DO INPUT DE ALTURA
  var inputalt = document.querySelector("#altura");
  // RECEBENDO O VALOR DO INPUT DE ALTURA
  var altura = inputalt.value;

    // DECLARAR VARIAVEL DO INPUT DE PESO
  var inputpeso = document.querySelector("#peso");
    // RECEBENDO O VALOR DO INPUT DE PESO
  var peso = inputpeso.value;

  // CRIANDO VARIAVEL PARA RECEBER O VALOR DENTRO DO SPAN ID: #result
  var resultadoImc = document.querySelector("#result");


    // CRIANDO A FORMULA DE CALCULO PARA O IMC
  const calcImc = peso / (altura ** 2);

      // LIMITANDO A QUANTIDADE DE NÚMEROS APÓS A VÍRGULA
  lastResult = calcImc.toFixed(2);

        // SUBSTITUINDO O NÚMERO DO IMC PELO RESULTADO DO CALCULO FEITO NA VARIAVEL "calcImc"
  resultadoImc.innerHTML = (lastResult);




          // MOSTRAR O TEXTO AO CLICAR NO BOTÃO

  var toggleResult = document.querySelector("#result-text");
  toggleResult.style = ("display: flex;")




        // IF'S PARA ESCOLHER DE ACORDO COM O IMC QUAL A CARACTERISTICA DE CADA PESO

  var textResult = document.querySelector("#type");
  if (lastResult < 16) {
    textResult.innerText = ("  Subpeso Severo!");
  }
  else if(lastResult > 16 && lastResult <=19.9){
    textResult.innerText = ("  Subpeso!");
  }
  else if(lastResult > 19.9 && lastResult <= 24.9){
    textResult.innerText = ("  Normal!");
  }
  else if(lastResult > 24.9 && lastResult <= 29.9){
    textResult.innerText = ("  Sobrepeso!");
  }
  else if(lastResult > 29.9 && lastResult <= 39.9){
    textResult.innerText = ("  Obesidade!");
  }
  else if(lastResult >= 40){
    textResult.innerText = ("  Obesidade Mórbida!");
  }
  else{
    textResult.innerText = ("  ERRO")
  }
}