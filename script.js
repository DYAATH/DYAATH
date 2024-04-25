let boton = document.getElementById('boton');
let respuesta = document.getElementById('respuesta');
let numero = Math.floor(Math.random() * 100);
let winSound = document.getElementById('winSound');
let loseSound = document.getElementById('loseSound');
let intentos = 5;
let atajo = document.getElementById('atajo');

boton.addEventListener('click', function () {
   if (intentos > 0) { 
        let barra = prompt('Escribe el numero');

        if (barra === null || barra === "") {
            respuesta.innerHTML = `Por favor ingresa un numero`;
        } else if (barra == numero) {
            respuesta.innerHTML = `¡Correcto! El numero es ${numero}. ¡Felicitaciones!🎆`;
            winSound.play(); // Reproducir sonido de ganar
        } else if (barra < numero) {
            respuesta.innerHTML = `Perdiste. El numero ${barra} es demasiado bajo. Intenta de nuevo.`;
            loseSound.play();
        } else if (barra > numero) {
            respuesta.innerHTML = `Perdiste. El numero ${barra} es demasiado alto. Intenta de nuevo.`;
            loseSound.play();
        }
        intentos--;
    } else {
        respuesta.innerHTML = `hijueputa bruto. El numero era ${numero}. ¡tapado de mierda!`;
        loseSound.play();
    }
});

atajo.addEventListener('click', function () {
   respuesta.innerHTML = `el numero es ${numero} `
})
