window.alert("site voltado para apredisagem");
window.confirm('gostaria de continuar?');


var nome = window.prompt('qual é o seu nome?');
window.alert("é um grande prazer te conhecer, " + nome);

var n1 = Number.parseInt(window.prompt('digite um numero'));//string
var n2 = Number.parseFloat(window.prompt('digite outro numero'));//string
var n3 = Number(window.prompt('digite outro numero'))//conversoes string pra numero
var s = n1+n2+n3
window.alert("total, " + s);
//string(n) converte instring em numero

//pay so rouder ${}
window.alert('A resultado é ${s} senhor ${nome}');
document.write("ola, ${nome}!seu nome tem ${nome.length} letras");
document.writeln('seu nome maiusculas é ${nome.toUpperCase}');
document.writeln('seu nome maiusculas é ${nome.toUlowerCase}');

//.toFixed(2) fixa casa decimal
//.replace('.',',') troca ponto por virgula
//.tolocaLeStrig('pt-br', {style: 'currency',currency': 'EUR'})converte de real pra dolar
