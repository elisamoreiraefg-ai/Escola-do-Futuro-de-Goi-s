// 'fs' é o módulo de File System (Sistema de Arquivos)
const fs = require('fs'); 
// O comando abaixo cria (ou sobrescreve) um arquivo chamado 'vazio.txt' com conteúdo vazio ('')
fs.writeFileSync('vazio.txt', ''); 
console.log("Arquivo criado no teu computador!");
// 'new Date()' é um comando interno do JavaScript que captura o momento atual do sistema
console.log("Data atual: " + new Date());
// 'require' serve para importar módulos (ferramentas) que já vêm com o Node
const os = require('os'); // Importa o módulo de Sistema Operacional (OS)
console.log("Utilizador atual: " + os.userInfo().username);
// A função console.log exibe mensagens no terminal/saída do sistema
console.log("Olá! O Node está a funcionar.");
const parte1 = "Node";
const parte2 = ".js";
// Guardamos o resultado da junção em uma terceira variável antes de imprimir
const resultado = parte1 + parte2;
console.log(resultado);
// '__filename' é uma variável especial que guarda o caminho completo deste arquivo no disco
console.log("Este arquivo está localizado em: " + __filename);
// 'const' cria uma variável cujo valor não muda (constante)
const nome = "George"; 
// O símbolo '+' aqui serve para juntar (concatenar) o texto com a variável
console.log("Bem-vindo, " + nome);
