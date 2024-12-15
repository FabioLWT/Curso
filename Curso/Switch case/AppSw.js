const nome = "Nicole";

/* caso IF if(nome === "Fabio"){
    console.log("O nome é Fabio")
}else if (nome === "Nicole"){
    console.log("O nome é Nicole");
} else {
    console.log("Nome Desconhecido");
} */

switch (nome) {
  case "Fabio":
    console.log("O nome é Fabio");
    break;
  case "Nicole":
    console.log("O nome é Nicole");
    break;

  default:
    console.log("Nome Desconhecido");
}
