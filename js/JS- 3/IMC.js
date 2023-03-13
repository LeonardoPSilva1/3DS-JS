export function calculo(){
    for(var i = 0; i < Pessoas.length; i++){
       var pessoa = Pessoas[i];
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

export function categoria(){
    var tabela = {
       "Abaixo do peso!": 0,
       "Peso Normal": 0,
       "Sobrepeso!": 0,
       "Obesidade Grau 1": 0,
       "Obesidade Grau 2": 0,
       "Obesidade Grau 3": 0
    };
   
    for(var i = 0; i < Pessoas.length; i++){
       var pessoa = Pessoas[i];
       tabela[pessoa.CategoriaIMC] += 1;
   };
   console.log(tabela);
   };

   function mostrarIMC(Pessoas){

    var texto = "";
    texto += Pessoas.nome + " - " + Pessoas.imc.toFixed(2) + " Categorizado: "+ Pessoas.CategoriaIMC;
    console.log(texto);
};
mostrarIMC(Pessoas[3]);
categoria();
console.log(Pessoas)