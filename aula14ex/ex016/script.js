function contar() {
    let ini = window.document.getElementById('txtini')
    let fim = window.document.getElementById('txtfim')
    let pas = window.document.getElementById('txtpas')
    let res = window.document.getElementById('res')

    if (ini.value == '' || fim.value == '' || pas.value == 0) {
        window.alert('Valor invalido')
    } else {
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(pas.value)
       if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
       } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
       }
        res.innerHTML += `\u{1F3C1}`
    }
}