export default class pessoa {
    constructor(nome, idade, altura, peso){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
    this.imc = 0;
    this.CategoriaIMC =  "n/a";
    }
    calcularIMC(){
            this.imc = this.peso / (this.altura * this.altura);
     
            if(this.imc <= 18.5){
             this.CategoriaIMC = "Abaixo do peso!"
            }else if(this.imc <= 24.9) {
             this.CategoriaIMC = "Peso Normal"
            }else if(this.imc <= 29.9){
             this.CategoriaIMC = "Sobrepeso!"
            }else if(this.imc <= 34.9){
             this.CategoriaIMC = "Obesidade Grau 1"
            }else if(this.imc <= 39.9){
             this.CategoriaIMC = "Obesidade Grau 2"
            }else if(this.imc <= 40){
             this.CategoriaIMC = "Obesidade Grau 3"
            }
         }

    }
export let pessoas = [
    {
    Humano: new pessoa('Leonardo', 17, 1.83, 78.5)
    },
    {
    Humano: new pessoa('Magno', 18, 1.83, 70.5)
    }
    ]

  