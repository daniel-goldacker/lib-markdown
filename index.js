import chalk from 'chalk';
import fs from 'fs';

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'Não foi possivel ler o arquivo'));
}

// pegaArquivo sincrono
/* function pegarArquivo(caminhoArquivo){
    const encoding = 'utf-8';

    fs.readFile(caminhoArquivo, encoding, function(error, data) {
        if (error){
            trataErro(error);
        }

        console.log(chalk.green(data));
    })
} */

// pegaArquivo assincrono 1
/* function pegarArquivo(caminhoArquivo){
    const encoding = 'utf-8';

    fs.promises.readFile(caminhoArquivo, encoding) 
    .then((data) => console.log(chalk.green(data)))
    .catch((error)=> trataErro(error));
} */

// pegarArquivo assincrono 2
async function pegaArquivo(caminhoArquivo){
    try {
        const encoding = 'utf-8';
        const data = await fs.promises.readFile(caminhoArquivo, encoding);
        return extraiLinks(data);
    } catch (error) {
        trataErro(error);
    }
}

function extraiLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultados = [];
    let temp;
    while((temp = regex.exec(texto)) !== null) {
      arrayResultados.push({ [temp[1]]: temp[2] });
    }
    return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
  }

export default pegaArquivo;