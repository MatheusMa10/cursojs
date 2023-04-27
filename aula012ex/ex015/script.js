function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var foto = document.getElementById('foto') 
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgdia.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgtarde.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imgnoite.png')
            }else {
                //idoso
                img.setAttribute('src', 'imgnoite.png')
            }    
        }else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgdia.png')
            }else if (idade < 21) {
                img.setAttribute('src','imgtarde.png')
                //jovem
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imgnoite.png')
            }else {
                //idoso
                img.setAttribute('src', 'imgnoite.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
        foto.appendChild(img)
    }
}