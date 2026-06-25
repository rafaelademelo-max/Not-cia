const display = document.getElementById("display");

function adicionar(valor) {
    if (display.innerText === "0") {
        display.innerText = valor;
    } else {
        display.innerText += valor;
    }
}

function limpar() {
    display.innerText = "0";
}

function apagar() {
    let texto = display.innerText;

    if (texto.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = texto.slice(0, -1);
    }
}

function calcular() {
    try {
        let resultado = eval(display.innerText);
        display.innerText = resultado;
    } catch {
        display.innerText = "Erro";
    }
}