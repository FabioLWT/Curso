const media = (10 + 9 + 7 + 6) / 4;
console.log(media);
let resultado = "Aluno reprovado";

if (media === 10) {
  resultado = "Aluno aprovado com nota 10";
} else if (media >= 7 && media <= 9) {
  resultado = "Aluno aprovado com boa nota";
} else if (media >= 6 && media < 7) {
  resultado = "Aluno para recuperação";
} else {
  resultado = "Aluno Reprovado";
}

console.log(resultado);

// Combinar informações e funcionalidades

// Estrutura condicionais / controle + operadores logicos + comparação
