//const nome = "gabriel"
//const sobrenome1 = "Sundl"
//const sobrenome2 = "Luedtke"
//const templateString = `Olá, meu nome completo é: ${ nome} ${sobrenome1} ${sobrenome2}`
//const ano = 2008
//const idade = 2026 - ano
//const templateString2 = `tenho ${idade} anos e nasci no ano de ${ano} `

//console.log (templateString, templateString2)

//const numero = 50
//console.log(numero%2,)
//if(numero%2==0){
  //  console.log('o numero é par')

//}else{

//    console.log('O numero é impar')
//}


//const valor = 1000

//const valordodesconto = valor * 0.10
//const valordescontado = valor - valordodesconto
//console.log(valordescontado)


/* const peso = prompt("Digite seu peso (kg):");
const altura = prompt("Digite sua altura (cm):");

const alturaconvertida = altura/100
const imc = peso / (alturaconvertida * alturaconvertida);
//1.8
//180 = 1.8
//180/100
if (imc < 18.5) {
    alert("IMC: " + imc + " - Abaixo do peso");
} else if (imc < 25) {
    alert("IMC: " + imc + " - Normal");
} else if (imc < 30) {
    alert("IMC: " + imc + " - Sobrepeso");
} else if (imc < 35) {
    alert("IMC: " + imc + " - Obeso: Classe I");
} else if (imc < 40) {
    alert("IMC: " + imc + " - Obeso: Classe II");
} else {
    alert("IMC: " + imc + " - Obeso: Classe III");
} */


    let nome = prompt("Digite sem nome")
let nomeInvertido = "";

let palavramaiscula = nome.toUpperCase()
let palavraminuscula = nome.toLowerCase()
console.log(palavramaiscula)
console.log(palavraminuscula)
for (let i = nome.length - 1; i >= 0; i--) {
    nomeInvertido += nome[i];


}
console.log(nomeInvertido); 
let vogais = 0
for (let i = 0; i < nome.length; i++) {
    let letra = nome[i];
    if(letra=="a"||letra=="e"||letra=="i"){
        vogais++
    }

}

console.log(nome, "Tem "+vogais +" vogais")


let frase = ("hoje vou pular da ponte:");

let frasediferente = "";


for (let i = 0; i < frase.length; i++) {
  
    if (i % 2 === 0) {
        frasediferente += frase[i].toUpperCase();
    } else {
        frasediferente += frase[i].toLowerCase();
    }
}


console.log(frasediferente);


