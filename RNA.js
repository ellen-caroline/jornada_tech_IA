// função número aleatório
function randomRange(min, max) {
    return Math.random() * (max - min) + min
}

// função interpolação linear
// interpolação é uma forma de adivinhar um valor entre outros dois já conhecidos
function lerp(a, b, t) {
    // calcula um valor intermediário entre 'a' e 'b' com base no fator 't'
    return a + (b - a) * t
}

class Neuron {
    constructor(inputs) {
        // inicializa o neurônio com um viés (bias) aleatório no intervalo [-1, 1]
        
        // o bias serve para a rede neural a aprender, seja novas funções e dados inseridos na IA
        this.bias = randomRange(-1, 1);

        this.weightList = new Array(inputs)
        .fill()
        .map(() => randomRange(-1, 1));
    }
}

// função que calcula a saída do neurônio (ativação)
g(signalList = []); {
    let u = 0;

    // calcula a soma ponderada dos sinais de entrada multiplicados pelos pesos
    for(let i = 0; i < this.weightList.lenght; i++) {
        u += signalList(i) * this.weightList(i)
    }

    // verifica se o neurônio está ativado com base na função tangente
    if(Math.tanh(u) > this.bias) return 1; // ativado
    else return 0; // desativado
};

// função para mutação dos neurônios (pesos e bias)
mutate(rate = 1); {
    this.weightList = this.weightList.map(() => {
        return lerp(w, randomRange(-1, 1), rate)
    });

    this.bias = lerp(this.bias, randomRange(-1, 1), range)
}