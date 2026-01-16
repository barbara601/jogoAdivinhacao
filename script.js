let numeroSecreto = Math.floor(Math.random() * 100) + 1;//gera um numero aleatorio entre 1 e 100
const maxTentativas = 10;//define numero maximo de tentativas
let tentativasRestantes = maxTentativas;//inicia o contador de tentativas e define quantas tentativas ainda restam
function chutar() {
    let palpite = parseInt (document.getElementById("inserirPalpite").value);//pega o valor do input e converte em numero
    if (!palpite || palpite < 1 || palpite > 100) {
        document.getElementById("mensagem").textContent = "Insira um número válido entre 1 e 100.";
        return;//verifica se o palpite é valido
    }
    if (palpite === numeroSecreto) {
        document.getElementById("mensagem").textContent = `Parabéns, você acertou! O número secreto ${numeroSecreto}!`;
        document.getElementById("tentativas").textContent = "Jogo encerrado.";
        return;//verifica se o palpite esta correto
    }
    tentativasRestantes--;//diminui o numero de tentativas restantes
    if (palpite < numeroSecreto) {
        document.getElementById("mensagem").textContent = "O número secreto é maior!";
    } else {
        document.getElementById("mensagem").textContent = "O número secreto é menor!";
    }
    document.getElementById("tentativas").textContent = `Você tem mais ${tentativasRestantes} tentativas.`;//atualiza o numero de tentativas restantes
    if (tentativasRestantes === 0) {
        document.getElementById("mensagem").textContent = `Fim de jogo! O número secreto era ${numeroSecreto}.`;
        document.getElementById("tentativas").textContent = "Jogo encerrado.";
    }
}