document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:seuemail@example.com?subject=Contato de ${name}&body=Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    
    window.location.href = mailtoLink;
});
