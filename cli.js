import chalk from "chalk";
import pegaArquivo from "./index.js";
import validaURL from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = awaitpegaArquivo(caminhoDoArquivo[2]);

    if(caminho[3] === "validar"){
        console.log(chalk.yellow("lista de validos"), await validaURL(resultado));
    }
    else{
        console.log(chalk.yellow("Lista de Links"), resultado)
    }
    
}

processaTexto(caminho);
//console.log(pegaArquivo(caminho[2]));
