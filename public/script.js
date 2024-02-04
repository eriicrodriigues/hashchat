const botaoEnviar = document.getElementById('enviar');
const caixaMensagem= document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

// Função para enviar mensagem
const enviarMensagem = () => {
    if (caixaMensagem.value !== "") {
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = "";
    }
};

// Adicionar evento de clique ao botão
botaoEnviar.addEventListener('click', enviarMensagem);

// Adicionar evento para a tecla "Enter" na caixa de mensagem
caixaMensagem.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        enviarMensagem();
    }
});

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
});