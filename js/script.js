// animação
const text = "Desenvolvedor em aprendizagem...";
let index = 0;

function typeEffect(){
    if (index < text.length){
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

typeEffect();

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i = 0; i < 80; i++){
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: Math.random() * 3,
    vy: Math.random() * 3
  });
}
