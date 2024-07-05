// Efeito de digitação para o texto de apresentação
const text = "Sou um desenvolvedor front-end com mais de 2,5 anos de experiência profissional, especializado em desenvolvimento front-end. Minha experiência está em criar interfaces intuitivas e acessíveis.";
const typingText = document.querySelector('.typing-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

window.addEventListener('load', typeWriter);

// Menu hambúrguer
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
});

// Fechar menu ao clicar em um link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        links.forEach(link => {
            link.classList.remove('fade');
        });
    });
});

// Animação das habilidades
function animateSkills() {
    const skills = document.querySelectorAll('.skill');
    const windowHeight = window.innerHeight;

    skills.forEach((skill, index) => {
        const skillTop = skill.getBoundingClientRect().top;
        if (skillTop < windowHeight - 100) {
            setTimeout(() => {
                skill.classList.add('visible');
            }, index * 100);
        }
    });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// Carrossel de projetos
const carousel = document.querySelector('.carousel-inner');
const projects = document.querySelectorAll('.project');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showProject(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showProject(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    showProject(currentIndex);
});

// Smooth scroll para as âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de contato
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
    form.reset();
});

// Animação de entrada para elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);