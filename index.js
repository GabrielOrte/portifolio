const texto = "Seja bem vindo! Espero que tenha uma boa experiência.";
const elemento = document.getElementById("nome");

let i = 0;
let apagando = false;

function animar() {
    if (!apagando) {
        // escrevendo
        elemento.innerHTML = texto.substring(0, i + 1);
        i++;

        if (i === texto.length) {
            apagando = true;
            setTimeout(animar, 2500); 
            return;
        }
    } else {
        // apagando
        elemento.innerHTML = texto.substring(0, i - 1);
       
        i--;

        if (i === 0) {
            apagando = false;
        }
    }

    setTimeout(animar, apagando ? 100: 100);
}

animar();