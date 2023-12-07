document.addEventListener("DOMContentLoaded", function() {
    const movies = document.querySelectorAll(".movie-list li");
    const modal = document.getElementById("movie-modal");
    const closeModal = document.getElementById("close-modal");
    const cartButton = document.getElementById("cart-button");
    const modalTitle = document.getElementById("modal-title");
    const modalSynopsis = document.getElementById("modal-synopsis");
    const modalElenco = document.getElementById("modal-elenco");
    const modalDiretor = document.getElementById("modal-diretor");
    const addToCartButtons = document.querySelectorAll(".btn-add-to-cart");

    let cart = [];
    
    //relogio
    function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const clock = document.getElementById('clock');
  clock.textContent = `${hours}:${minutes}:${seconds}`;

  setTimeout(updateClock, 1000);
}

updateClock();
    
    //carrossel 
 
     const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block'; 
} 

setInterval(showNextImage, 3000); 

    // Encontre o elemento "cart-display" aqui
    const cartDisplay = document.getElementById("cart-display");

    // Função para abrir o modal de detalhes do filme
function openMovieDetails(title, synopsis, elenco, diretor) {
    modalTitle.textContent = title;
    modalSynopsis.textContent = synopsis;
    modalElenco.textContent = "Elenco: " + elenco;
    modalDiretor.textContent = "Diretor: " + diretor;
    modal.style.display = "block";

}


    // Adicionar evento de clique para exibir detalhes do filme
movies.forEach(movie => {
    const detailsButton = movie.querySelector(".btn-details");
    detailsButton.addEventListener("click", () => {
        const movieTitle = movie.querySelector("h2").textContent;
        const movieSynopsis = movie.querySelector(".sinopse").textContent;
        const movieElenco = movie.querySelector(".elenco").textContent;
        const movieDiretor = movie.querySelector(".diretor").textContent;
        openMovieDetails(movieTitle, movieSynopsis, movieElenco, movieDiretor); // Chame a função aqui
    });
});



     // Fechar o modal quando o botão "X" é clicado
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });



    // Adicionar filme ao carrinho
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const movieTitle = button.parentElement.querySelector("h2").textContent;
            cart.push(movieTitle);
            updateCartDisplay();
        });
    });

    // Atualizar exibição do carrinho
    function updateCartDisplay() {
        cartDisplay.textContent = `Carrinho: ${cart.length} filmes`;
    }

    // Exibir o formulário de pedido ao clicar no botão "Carrinho"
    cartButton.addEventListener("click", () => {
        document.getElementById("order-form").style.display = "block";
    });

    // Selecione o botão de envio do pedido (submitOrder) e adicione um ouvinte de evento de clique
const submitOrder = document.getElementById("submit-order");

submitOrder.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const payment = document.getElementById("payment").value;

    if (name && address && payment && cart.length > 0) {
        // Processar o pedido, você pode enviar os detalhes para um servidor aqui
        alert("Pedido processado com sucesso!");
        cart = [];
        updateCartDisplay();
    } else {
        alert("Por favor, preencha todos os campos e adicione filmes ao carrinho.");
    }
});


});
