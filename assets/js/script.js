/*
Matheus Brenner tem 30 anos, pesa 100 kg, tem 1.90 de altura e seu IMC é de 27.70083102493075
*/

const inputNome = document.querySelector('#nome');
const inputIdade = document.querySelector('#idade');
const inputAltura = document.querySelector('#altura');
const inputPeso = document.querySelector('#peso');
const btn = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');
const imagemIMC = document.querySelector('#imagemimc');

const calcularIMC = () => {
  return (+inputPeso.value / inputAltura.value ** 2).toFixed(2);
};

btn.addEventListener('click', (e) => {
  console.log(e);
  e.preventDefault();
  const imc = calcularIMC();
  resultado.innerText = `${inputNome.value} tem ${inputIdade.value} anos, pesa ${inputPeso.value}kg, tem ${inputAltura.value} de altura, e seu IMC é de ${imc}`;

  if (imc <= 18.49) {
    imagemIMC.src = '/assets/img/Magreza.png';
  } else if (imc >= 18.5 && imc <= 24.99) {
    imagemIMC.src = '/assets/img/Normal.png';
  } else if (imc >= 25.0 && imc <= 29.99) {
    imagemIMC.src = '/assets/img/Sobrepeso.png';
  } else if (imc >= 30.0 && imc <= 39.99) {
    imagemIMC.src = '/assets/img/Obesidade.png';
  } else if (imc >= 40.0) {
    imagemIMC.src = '/assets/img/ObesidadeGrave.png';
  } else {
    resultado.innerText = 'Preencha pelo menos os campos de altura e peso';
  }
});
