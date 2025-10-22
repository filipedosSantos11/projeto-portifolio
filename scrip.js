const botao = document.querySelector("botao-tema");
const body = document.body;

// Persitência do tema
const temasalvo = localStorage.getItem("tema");
temaEscuro(temasalvo === "escuro");

// função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
    if (tipo == true) {
        body.classList.add('escuro');
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('escuro');
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

botao.addEventListener('click', () => {
    const isescuro = body.classList.toggle('escuro');
    temaEscuro(isescuro);
    localStorage.setItem("tema", isescuro ? "escuro" : "claro");
});

// scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20; // Ajuste de 20px
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});