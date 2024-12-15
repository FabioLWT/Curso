const media = 6;

let resultado ;

// if(media >= 10){
  //  resultado = "Aluno top"
// }else {
  //  resultado = "Reprovado";
// }

resultado = media >= 7 ? "aprovado" : (media >= 5 ? "Em recuperação" : "reprovado");

console.log(resultado);