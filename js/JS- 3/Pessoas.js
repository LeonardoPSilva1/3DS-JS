
export default class Pessoa {
    constructor(nome, idade, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.imc = 0;
        this.categoriaIMC = "";
    }
    calculaIMC(){
    this.imc = this.peso / (this.altura * this.altura);
    
    if(this.imc <= 18.5){
        this.categoriaIMC = "Abaixo do peso!"
       }else if(this.imc <= 24.9) {
        this.categoriaIMC = "Peso Normal"
       }else if(this.imc <= 29.9){
        this.categoriaIMC = "Sobrepeso!"
       }else if(this.imc <= 34.9){
        this.categoriaIMC = "Obesidade Grau 1"
       }else if(this.imc <= 39.9){
        this.categoriaIMC = "Obesidade Grau 2"
       }else if(this.imc <= 40){
        this.categoriaIMC = "Obesidade Grau 3"
       }
    }
}


export let lista = [
    new Pessoa('Leonardo', 17, 78.5, 1.83),
    new Pessoa('Magno', 18, 68.5, 1.84),
    new Pessoa('Goes', 18, 66.3, 1.70),
    new Pessoa('Vitor', 18, 66.7, 1.70), 
    new Pessoa('Matheos', 18, 62.2, 1.85),
    
   
    ]