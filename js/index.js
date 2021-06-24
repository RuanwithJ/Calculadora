const display = document.querySelector('.tela');
const variaveis = {x:0, y:0, oper:''};
const tela = {
    texto:'',
    display: display,
}
const calculadora = document.getElementById('calculadora')
calculadora.addEventListener('click', function(e){
    if(e.target.classList[0]=='clear')
        limpaTela(tela);
    if(e.target.classList[0]=='erase')
        apaga(tela);
    if(e.target.classList[0]=='num' || e.target.classList[0] == 'ponto')
        digitaNumero(e.target.textContent, tela);
    if(tela.texto=='' && e.target.classList[0]=='sub')
            tela.texto = "-";
    else if(e.target.classList[2]=='operacao'){
        variaveis.x = Number(tela.texto, 10);
        limpaTela(tela);
        variaveis.oper = e.target.classList[0];
    }
    if(e.target.classList[0]=='igual'){
        variaveis.y = Number(tela.texto, 10);
        if(variaveis.oper=='soma')
            soma(variaveis, tela);
        else if(variaveis.oper == 'div')
            div(variaveis, tela);
        else if(variaveis.oper == 'mult')
            mult(variaveis, tela);
        else if(variaveis.oper == 'sub')
            sub(variaveis, tela);  
    }
    imprimeNaTela(tela);
    
});
function soma(variaveis, tela){
    const soma  = variaveis.x + variaveis.y;
    tela.texto = "" + soma;
 }

 function div(variaveis, tela){
         let div;
        if(variaveis.y!=0)
            div = variaveis.x/variaveis.y
        else  
            div = 'error';
        tela.texto = ""+div;
 }
function sub(variaveis, tela){
    const sub  = variaveis.x - variaveis.y;
    tela.texto = "" + sub;
}
function mult(variaveis, tela){
    const mult = variaveis.x * variaveis.y;
    tela.texto = "" + mult;
}
function digitaNumero(numero, tela){
    tela.texto += numero;
}
function imprimeNaTela(tela){
    tela.display.textContent = tela.texto;
}
function limpaTela(tela){
    tela.texto = '';
    imprimeNaTela(tela);
}
function apaga(tela){
    let aux = '';
    for(let i = 0; i<tela.texto.length-1; i++)
        aux += tela.texto[i];
    tela.texto = aux;

}