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
window.alert(`A resultado é ${s} senhor ${nome}`);
document.write(`ola, ${nome}!seu nome tem ${nome.length} letras`);
document.writeln(`seu nome maiusculas é ${nome.toUpperCase}`);
document.writeln(`seu nome maiusculas é ${nome.toLowerCase}`);

//.toFixed(2) fixa casa decimal
//.replace('.',',') troca ponto por virgula
//.tolocaLeStrig('pt-br', {style: 'currency',currency': 'EUR'})converte de real pra dolar

//operadores js
/*aritimeticos
+ 5+2=7
- 5-2=3
* 5*2=10
/ 5/2=2.5 divisao real
% 5%2=1resto divisao inteira
** 5**2=25 potencia
()mudar ordem de precedencia (2+5)/2
precedencia: ()-> **-> *%/-> +-
*/
/*auto atribuição
n=n+4 simplificado n+=4 incremento n++
*/
/*relacionais
> 5>2 true
< 7<4 false
>= 8>=8 true
<= 9>=7 false
== 5==5 true
!= 4!=4 false
analise de tiopo operador de identidade ou igualdade restrita
 5==='5' false
 5===5 True
 ou dfesigual restrito !===
*/
/*logicos
! negação Não
&& conjução E
|| disjunção OU
*/
/*ternario
?:   teste ? true : false
     media >=7?"aprovado":"reprovado"
*/
