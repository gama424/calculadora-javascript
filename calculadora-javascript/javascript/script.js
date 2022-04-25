

function insert(number){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + number;
    //inserindo dados no html atraves do ID e usando o metodo onclick

}


function clean(){

    document.getElementById('resultado').innerHTML = "";
    //funçao para limpar campos
}

function back(){

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    //funão para apagar um caractere
}


function calcular(){

    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}