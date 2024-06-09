
const btnAvancar = document.getElementById("btn-avancar");   // Seleciona o botão de avançar na interface usando seu ID
const btnVoltar = document.getElementById("btn-voltar");   // Seleciona o botão de voltar na interface usando seu ID
let cartaoAtual = 0;    // Inicializa uma variável para armazenar o índice do cartão atual
const cartoes = document.querySelectorAll(".cartao");   // Seleciona todos os elementos com a classe "cartao" na interface


btnAvancar.addEventListener("click", function () {    // Adiciona um ouvinte de eventos de clique no botão de avançar
	const ehUltimoCartao = cartaoAtual === cartoes.length - 1;  // Verifica se o cartão atual é o último na lista de cartões
	if (ehUltimoCartao) return;   // Se for o último cartão, encerra a execução da função

	esconderCartaoSelecionado();	// Esconde o cartão atualmente selecionado

	cartaoAtual++;  // Incrementa o índice do cartão atual
	mostrarCartao();// Mostra o próximo cartão na interface
});


btnVoltar.addEventListener("click", function () { 
	const ehPrimeiroCartao = cartaoAtual === 0;
	if (ehPrimeiroCartao) return;

	esconderCartaoSelecionado();

	cartaoAtual--;    // Decrementa o índice do cartão atual

	mostrarCartao();
});

function mostrarCartao() {      // Define uma função para mostrar o cartão atual na interface
	cartoes[cartaoAtual].classList.add("selecionado");	// Adiciona a classe "selecionado" ao cartão atual para exibi-lo
}

function esconderCartaoSelecionado() {	// Define uma função para esconder o cartão atualmente selecionado na interface
	const cartaoSelecionado = document.querySelector(".selecionado");	// Seleciona o cartão atualmente selecionado na interface
	cartaoSelecionado.classList.remove("selecionado");	// Remove a classe "selecionado" do cartão atualmente selecionado para escondê-lo
}