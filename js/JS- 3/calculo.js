function MostrarIMC(){


    var texto = "";
    if ( Numero < 0 || Numero > 19){
        texto += "Número inválido!";
        document.getElementById("resultado").innerHTML = texto;
    }else{
        var Pessoa = Pessoas[Numero].objeto;
        texto += Pessoa.nome + " - " + Pessoa.imc.toFixed(2) + " Categorizado(a): "+ Pessoa.categoriaIMC +"<br>";
        document.getElementById("resultado").innerHTML = texto;
    };
    }