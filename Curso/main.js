const fs = require('fs');
const path = require('path');

const rootDir = __dirname; // Diretório raiz do projeto

// Função para rodar arquivos em cada pasta
const executeFiles = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      executeFiles(filePath); // Recursão para subpastas
    } else if (file.endsWith('.js')) {
      console.log(`Executando: ${filePath}`);
      require(filePath); // Executa o arquivo
    }
  });
};

executeFiles(rootDir);
