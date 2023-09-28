class Calculadora {
    constructor() {
        this.valor = '0'
    }

    adicionarNumero(numero) {
        if (this.valor === '0') {
            this.valor = numero
        } else {
            this.valor += numero
        }

        this.atualizarVisor()
    }

    adicionarOperacao(operacao) { 
        if (
            this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '-' ||
            this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '/' 
        ) {
            this.valor = this.valor.slice(0, -1) + operacao 
        } else {
            this.valor += operacao
        }
        this.atualizarVisor()
    }

    limpar() {
        this.valor = '0'
        this.atualizarVisor()
    }

    resultado(){
        try{
            this.valor = eval(this.valor).toString()
        } catch(e) {
            this.valor = 'Erro'
        }
        this.atualizarVisor()
    }

    atualizarVisor(){
        document.getElementById('visor').value = this.valor
    }
}

let calculadora = new Calculadora()