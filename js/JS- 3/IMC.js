
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
       var pessoa = Pessoas[i].Humano;
       tabela[pessoa.CategoriaIMC] += 1;
   };
   console.log(tabela);
   };

export default function mostrarIMC(pessoa){
    
    var texto = "";
    texto += pessoa.nome + " - " + pessoa.imc.toFixed(2) + " Categorizado: "+ pessoa.CategoriaIMC;
    console.log(texto);
};

export function rodarIMC(pessoas){
    for(var i = 0; i < pessoas.length; i++){
        var pessoa = pessoas[i].Humano;

        pessoa.calcularIMC();
        
}
}

