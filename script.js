// Seleção dos elementos do DOM
const btnMaisFotos = document.getElementById('btnMaisFotos');
const modalImagens = document.getElementById('modalImagens');
const btnFecharModal = document.querySelector('.close-modal');

// Função para abrir a sobreposição (Modal)
btnMaisFotos.addEventListener('click', () => {
    modalImagens.style.display = 'flex';
    // Impede o fundo de rolar enquanto a galeria está aberta
    document.body.style.overflow = 'hidden'; 
});

// Lógica do botão "voltar ao topo"
const btnSubirTopo = document.getElementById('btnSubirTopo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnSubirTopo.style.display = 'flex';
    } else {
        btnSubirTopo.style.display = 'none';
    }
});

// Executa a rolagem suave para o topo ao clicar
btnSubirTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Efeito de subida suave
    });
});

// Função para fechar clicando no "X"
btnFecharModal.addEventListener('click', () => {
    modalImagens.style.display = 'none';
    document.body.style.overflow = 'auto'; // Devolve o scroll da página
});

// Função para fechar se o usuário clicar fora da caixa branca da galeria
window.addEventListener('click', (event) => {
    if (event.target === modalImagens) {
        modalImagens.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});