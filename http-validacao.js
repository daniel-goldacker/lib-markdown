import fetch  from "node-fetch";

function manejaErros(erro){
    throw new Error(erro.message);
}

function geraArrayLinks(arrayLinks){
   return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks){
    const links =  geraArrayLinks(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultado = arrayLinks.map((object, indice) => ({...object, satus:statusLinks[indice]}))

    return resultado;
}

async function checaStatus(arrayURLs){
    try{
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const res = await fetch(url);
            return `${res.status} - ${res.statusText}`;
        }))
    
        return arrayStatus;
    } catch(erro) {
        manejaErros(erro);
    } 
}

export default validaURLs;