
const objetos = document.querySelectorAll("[data-controle]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

objetos.forEach(elemento => {
    elemento.addEventListener("click", (evento) => {
        manipular(evento.target.dataset.controle, evento.target.parentNode)
    })
})

function manipular(operacao, identificador) {

    const controle = identificador.querySelector("[data-contador]")

    if (operacao === "-") {
        if (controle.value > 0)
            parseInt(controle.value--)
    }
    if (operacao === "+") {
        parseInt(controle.value++)
    }
}
