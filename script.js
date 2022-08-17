let nome =prompt("Nome do Aluno")
if (nome.length< 5){
alert("Nome Invalido");
script.reload(true);
}


let presenca = parseInt(prompt("Qual a presença?"))
if (presenca<0 || presenca>10){
    alert("Presença Invalida");
    script.reload(true);
}


let materia1 = prompt("Digite a materia")
let nota1 = parseFloat(prompt("Qual a nota?"))
if (nota1<0 || nota1>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia2 = prompt("Digite a materia")
let nota2 = parseFloat(prompt("Qual a nota?"))
if (nota2<0 || nota2>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia3 = prompt("Digite a materia")
let nota3 = parseFloat(prompt("Qual a nota?"))
if (nota3<0 || nota3>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia4 = prompt("Digite a materia")
let nota4 = parseFloat(prompt("Qual a nota?"))
if (nota4<0 || nota4>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia5 = prompt("Digite a materia")
let nota5 = parseFloat(prompt("Qual a nota?"))
if (nota5<0 || nota5>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia6 = prompt("Digite a materia")
let nota6 = parseFloat(prompt("Qual a nota?"))
if (nota6<0 || nota6>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia7 = prompt("Digite a materia")
let nota7 = parseFloat(prompt("Qual a nota?"))
if (nota7<0 || nota7>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia8 = prompt("Digite a materia")
let nota8 = parseFloat(prompt("Qual a nota?"))
if (nota8<0 || nota8>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia9 = prompt("Digite a materia")
let nota9 = parseFloat(prompt("Qual a nota?"))
if (nota9<0 || nota9>10){
    alert("Nota invalida");
    script.reload(true);
}

let materia10 = prompt("Digite a materia")
let nota10 = parseFloat(prompt("Qual a nota?"))
if (nota10<0 || nota10>10){
    alert("Nota invalida");
    script.reload(true);
}


let somaTotal = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10
let media = somaTotal/10


if(media>=8 && presenca>=6){
    alert(`A nota do aluno ${nome} é de ${media} e sua presença de ${presenca}: Aluno aprovado!`)
}else{
    alert(`A nota do aluno ${nome} é de ${media} e sua presença de ${presenca}: Aluno reprovado!`)
}








