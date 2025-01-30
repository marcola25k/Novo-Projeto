let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese female', {rate:1.2});
}
function exibirTextoNATela() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
}
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas =  `Voce descobriu o numero secreto com ${tentativa} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto e menor');      
    } 
 else {
exibirTextoNaTela('p', 'O numero secreto e Maior'); } 
    tentativa++;  
    limparCampo();
    }}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadesDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadesDeElementosNaLista == numeroLimite

) {
listaDeNumerosSorteados = [];

}


    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo()  {
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativa  = 1;
exibirTextoNATela();
document.getElementById('reiniciar').setAttribute('disabled',true)
}











