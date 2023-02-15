var Alunos = [{
    "nome": "Leonardo",
    "idade": 17,
    "peso": 75.5,
    "altura": 1.85,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
    {
    "nome": "Magno",
    "idade": 18,
    "peso": 70.5,
    "altura": 1.83,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Goes",
    "idade": 17,
    "peso": 66.3,
    "altura": 1.75,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Isis",
    "idade": 17,
    "peso": 66.0,
    "altura": 1.74,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Caio",
    "idade": 17,
    "peso": 95.0,
    "altura": 1.75,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Matheus",
    "idade": 18,
    "peso": 68.5,
    "altura": 1.85,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Kauan",
    "idade": 18,
    "peso": 70.0,
    "altura": 1.63,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Bruna",
    "idade": 17,
    "peso": 73.3,
    "altura": 1.70,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Maria",
    "idade": 17,
    "peso": 67.9,
    "altura": 1.65,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Danadoni",
    "idade": 30,
    "peso": 78.0,
    "altura": 1.81,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Clarisse",
    "idade": 18,
    "peso": 80,
    "altura": 1.80,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "João",
    "idade": 17,
    "peso": 55.9,
    "altura": 1.76,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Lorena",
    "idade": 17,
    "peso": 75.0,
    "altura": 1.70,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Babi",
    "idade": 16,
    "peso": 67.0,
    "altura": 1.67,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Vinicius",
    "idade": 18,
    "peso": 75.5,
    "altura": 1.70,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Luiz",
    "idade": 17,
    "peso": 73.5,
    "altura": 1.69,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Thayane",
    "idade": 37,
    "peso": 55.5,
    "altura": 1.40,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Dariel",
    "idade": 48,
    "peso": 65.0,
    "altura": 2.02,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Leticia",
    "idade": 19,
    "peso": 67.0,
    "altura": 1.57,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
     {
    "nome": "Karol",
    "idade": 19,
    "peso": 73.0,
    "altura": 1.67,
    "imc": 0,
    "CategoriaIMC": "n/a"
    },
]

function calculo(){
    for(var i = 0; i < Alunos.length; i++){
       var pessoa = Alunos[i];
       pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);

       if(Alunos[i].imc <= 18.5){
        Alunos[i].CategoriaIMC = "Abaixo do peso!"
       }else if(Alunos[i].imc <= 24.9) {
        Alunos[i].CategoriaIMC = "Peso Normal"
       }else if(Alunos[i].imc <= 29.9){
        Alunos[i].CategoriaIMC = "Sobrepeso!"
       }else if(Alunos[i].imc <= 34.9){
        Alunos[i].CategoriaIMC = "Obesidade Grau 1"
       }else if(Alunos[i].imc <= 39.9){
        Alunos[i].CategoriaIMC = "Obesidade Grau 2"
       }else if(Alunos[i].imc <= 40){
        Alunos[i].CategoriaIMC = "Obesidade Grau 3"
       }
    }
};
calculo();

function categoria(){
 var tabela = {
    "Abaixo do peso!": 0,
    "Peso Normal": 0,
    "Sobrepeso!": 0,
    "Obesidade Grau 1": 0,
    "Obesidade Grau 2": 0,
    "Obesidade Grau 3": 0
 };

 for(var i = 0; i < Alunos.length; i++){
    var pessoa = Alunos[i];
    tabela[pessoa.CategoriaIMC] += 1;
};
console.log(tabela);
};

function mostrarIMC(Alunos){

    var texto = "";
    texto += Alunos.nome + " - " + Alunos.imc.toFixed(2) + " Categorizado: "+ Alunos.CategoriaIMC;
    console.log(texto);
};
mostrarIMC(Alunos[3]);
categoria();
console.log(Alunos);