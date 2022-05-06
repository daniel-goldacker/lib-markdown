# lib-markdown

Biblioteca que valida os links encontrados em um arquivo 'Markdown'.

## Resumo

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação muito popular entre os programadores. É usada em muitas plataformas que manipulam texto (GitHub, fórum, blogs e etc) e é muito comum encontrar arquivos com este formato em qualquer repositório (começando pelo tradicional `README.md`).

Os arquivos `Markdown` normalmente contém _links_ que podem estar quebrados, ou que já não são válidos, prejudicando muito o valor da informação que está ali.

Com esta biblioteca é possivel:
- analisar arquivo com extensão .md;
- verificar se há links no arquivo markdown;
- nao encontrando, emitir msg avisando que não há links;
- caso encontre links, analisar se os links funcionam;
- retornar lista com os links identificados;
- retornar com o status http de cada link encontrado;

## Execução

### NPM

No terminal, ao executar os comandos abaixo:

| Comando | Descrição |
| ------ | ------ |
|`npm run cli` | Retorna uma lista com as URLs econtradas dentro do arquivo texto.md.|
|`npm run cli validar` | Retorna uma lista com o status code das URLs econtradas dentro do arquivo texto.md.| 
|`npm run test` | Retorna a execução dos teste de funcionamento definidos para a biblioteca lib-markdown|


