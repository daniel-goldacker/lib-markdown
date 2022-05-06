import pegaArquivo from '../index.js';

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'  
  }
]
describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
      expect(typeof pegaArquivo).toBe('function');
  })
  it('deve retornar array com resultados', async () => { 
    const result = await pegaArquivo('/Users/danielgoldacker/Desktop/lib-markdown/arquivos/texto.md')
    expect(result).toEqual(arrayResult)
  })
})
