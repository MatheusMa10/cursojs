function gerar() {
    var tabu = window.document.getElementById('txtnu')
    var res = window.document.getElementById('res')
    var ta = Number(tabu.value)
    var c = ''
    if (tabu.value.length == '') {
        window.alert('[ERRO] Digite um numero!')
    } else {
        for (var c = 0; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${ta} x ${c} = ${ta * c}`
            res.appendChild(item)
        }
    }
}