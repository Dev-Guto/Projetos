

//Essa variavel numeroArray é a variavel que guarda o imput do usuario e depois ela sera transformada em inteiro para operação
var numeroArray = new Array();
var estado;
var numero1;
var numero2;
var numeroR;
var operacao;


function nextNumber(valor){
    switch(operacao){

        case 'inicializacao':
            numeroArray.push(valor);
            numero1=parseFloat(numeroArray.join(''));
            display();
            break;    
        
        case 'soma':
            numeroArray.push(valor);
            numero2=parseFloat(numeroArray.join(''));
            display();
            break;
        
        case 'multiplicacao':
            numeroArray.push(valor);
            numero2=parseFloat(numeroArray.join(''));
            display();
            break;

        case 'divisao':
            numeroArray.push(valor);
            numero2=parseFloat(numeroArray.join(''));
            display();
            break;

        case 'subtracao':
            numeroArray.push(valor);
            numero2=parseFloat(numeroArray.join(''));
            display();
            break;
    }    

}
// Função display inicializa a variavel numero e converte o array para um numero float
function display(){
    if(operacao == 'inicializacao'){
        document.getElementById("display").innerText = numero1;
        console.log(numero1);
        console.log(operacao);
    }
    else if(operacao == 'resultado'){
        document.getElementById("display").innerText = numeroR;
        console.log(numeroR);
        console.log(operacao);

    }
    else{
        document.getElementById("display").innerText = '0';
        document.getElementById("display").innerText = numero2;
        console.log(numero2);
        console.log(operacao);
        
    }
}
function allClear(){
    operacao='inicializacao';
    numero1=0;
    numero2=0;
    numeroArray=[0];
    display();
}
function sinal(operando){

    if(operando =='soma'){
        operacao ='soma';
        numeroArray=[0];
        console.log(operacao)
    }
    if(operando=='subtracao'){
        operacao='subtracao';
        numeroArray=[0];
        console.log(operacao);
    }
    if(operando=='multiplicacao'){
        operacao='multiplicacao';
        numeroArray=[0];
        console.log(operacao);
    }
    if(operando=='divisao'){
        operacao='divisao';
        numeroArray=[0];
        console.log(operacao);
    }
}
function resultado(){
    if(operacao=='soma'){
        numeroR=numero1+numero2;
        operacao='resultado';
        display();
    }
    if(operacao=='subtracao'){
        numeroR=numero1-numero2;
        operacao='resultado';
        display();
    }
    if(operacao=='multiplicacao'){
        numeroR=numero1*numero2;
        operacao='resultado';
        display();
    }
    if(operacao=='divisao'){
        numeroR=numero1/numero2;
        operacao='resultado';
        display();
    }
}
function del(){
    switch(operacao){

        case 'inicializacao':
            numeroArray.pop();
            numero1=parseFloat(numeroArray.join(''));
            display();
            break;    
        
        case 'soma':
            numeroArray.pop();
            numero2=parseFloat(numeroArray.join(''));
            display();
            break;
        
        case 'multiplicacao':
            numeroArray.pop();
            numero2=parseFloat(numeroArray.join(''));
            display();
            break;

        case 'divisao':
            numeroArray.pop();
            numero2=parseFloat(numeroArray.join(''));
            display();
            break;

        case 'subtracao':
            numeroArray.pop();
            numero2=parseFloat(numeroArray.join(''));
            display();
            break;
    }

}