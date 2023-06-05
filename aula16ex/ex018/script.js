let num = window.document.getElementById('txtnum')
let sec = window.document.getElementById('sec')
let res = window.document.getElementById('res')
let valores = []

function ifNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function ifLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }

}

function adicionar() {
    if (ifNumero(num.value) && !ifLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        sec.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valores invalidos')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores == '') {
        window.alert('Adicione algum valor')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML += `<p>O total de valores é de ${tot} numeros</p>`
        res.innerHTML += `<p>O maior valor é ${maior} e o menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os valores é ${media}</p>`
    }
}

/*
let num = window.document.getElementById('txtnum')
let sec = window.document.getElementById('sec')
let res = window.document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        sec.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor invalido')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if ( valores.length == '') {
        window.alert('[ERRO] Adicione um valor')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) 
                maior = valores[pos]
            
            if(valores[pos] < menor) 
                menor = valores[pos]     
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados </p>`
        res.innerHTML += `<p>O maior valor é ${maior} o menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os numeros é ${soma}</p>`
        res.innerHTML += `<p>A media de todos os numeros é ${media}</p>`
    }
}
*/

const sum = (number1, number2) => number1 + number2

console.log(sum(30, 03))