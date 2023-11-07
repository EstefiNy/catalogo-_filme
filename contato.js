document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Coletar os valores dos campos do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Enviar os dados para o servidor (você precisará de um back-end para isso)

        // Simular uma resposta bem-sucedida
        const confirmationMessage = `O email de contato foi enviado para ${email}`;

        // Atualizar a página para exibir os dados do cliente e a mensagem de confirmação
        const contactSection = document.querySelector(".contact-form");
        contactSection.innerHTML = `<h2>Dados do Cliente</h2>
                                    <p><strong>Nome:</strong> ${name}</p>
                                    <p><strong>Email:</strong> ${email}</p>
                                    <p><strong>Telefone:</strong> ${phone}</p>
                                    <p><strong>Mensagem:</strong> ${message}</p>
                                    <p>${confirmationMessage}</p>`;
    });
});