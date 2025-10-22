// Contador de cliques
let contador = 0;
const cliques = document.getElementById('cliques');
document.getElementById('botaoClique').addEventListener('click', () => {
    contador++;
    cliques.textContent = contador;
});

// Frases aleatórias
const frases = [
    "Aprender é divertido!",
    "Código é poder!",
    "Pratique todos os dias!",
    "Open Source é para todos!"
];

document.getElementById('botaoFrase').addEventListener('click', () => {
    const aleatorio = Math.floor(Math.random() * frases.length);
    document.getElementById('frase').textContent = frases[aleatorio];
});
