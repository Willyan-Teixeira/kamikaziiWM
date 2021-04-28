



// document.getElementById("click-me").onclick = function(){
//     alert("voce clicou no botao ");
// };
// document.getElementById("hover-me").onmouseover = function(){
//     alert("voce passou com o cusor no botao  ");
// };
// document.getElementById("leave-me").onmouseout = function(){
//     alert("voce saiu com o cusor do botao  ");
// };
// document.onkeydown = function() {
//     alert('Você apertou a tecla: ' + event.keyCode);
// };
// function  button_clicked(){
//     alert("voce clicou no botao ");
// }
// document.getElementById("botao_cor").onclick = function(){
//     this.document.style["backgroundColor"]= "purple";
//     this.style.transform = "translateX(100px)";
// };


// var exemplo = document.getElementsByClassName("exemplo");

// exemplo[0].innerHTML = "teste 1";

// console.log(exemplo);

// var exemplo =  document.getElementsByTagName("p");

// console.log(exemplo);

// var count = 0;
// while (count <5) {
//     console.log(count);
//     count++;
// }
    

// var idade = 18;

// if (idade < 18) {
//     console.log("menor de idade ");
// }else if (idade == 18) {
//     console.log("tem 18 anos ");
// }

// else {
//     console.log("maior de idade ");
// }


// var nota = 8;
// var faltas = 5;

// if (nota >= 7 && faltas <= 4 ){
//     console.log("aprovado");
// }else {
//     console.log("reprovado");
// }

// var nota = 8;
// var faltas = 5;

// if (nota < 7 || faltas > 4 ){
//     console.log("reprovado");
// }else {
//     console.log("aprovado");
// }

// var nome = "will";

// if (nome){
//     console.log("nome :"+ nome);
// }else {
//     console.log("nome nao informado");
//}

// var socio = true ;
// var idade = 25 ; 

//  if (socio == true || idade >=65){
//      console.log("o ingresso e gratis");
//  }else {
//     if (idade <18){
//         console.log("preco a pagar : 6,00 ");
//     }else {
//         console.log("preco a pagar : 12,00");
//     }
//  }


var funcionarios = [
        
    {
        'nome': 'Carlos Henrique da Silva',
        'idade': 45,
        'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
    },

    {
        'nome': 'Maria Helena Pereira',
        'idade': 32,
        'filhos': [undefined]
        
    },

    {
        'nome': 'José Feliciano Maia',
        'idade': 39,
        'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
    }

];
 var list_element = document.getElementById("filhos");

 for (var a = 0; a < funcionarios.length ; a++) {
     
    if (funcionarios[a].filhos){

        var lista_filhos = funcionarios[a].filhos;

        for (var b =0; b < lista_filhos.length; b++) {
           list_element.innerHTML += '<li>' + lista_filhos[b] + '- filho de '+ funcionarios [a].nome;
       }
    }
 }