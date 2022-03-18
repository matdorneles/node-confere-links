const pegaArquivo = require('./index');
const validaUrls = require('./http-validacao')

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);

    if (caminho[3] === 'validar') {
        console.log('links validados', await validaUrls(resultado));
    } else {
        console.log('Lista de links', resultado);
    }
}

processaTexto(caminho);