let email_user = document.querySelector('input-email');
let mensagem_user = document.querySelector('input_mensagem');

function enviarMensagem(){
    let nome_user = document.getElementById('name');
    let resp = nome_user.value;
    let resposta_nome = document.getElementById('resposta-nome');

    resposta_nome.innerHTML = `Nome: ${resp}`;
}
