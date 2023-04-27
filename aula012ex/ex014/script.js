function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas</strong>`
    if (hora >= 0 && hora < 12) {
        img.src = 'imgdia.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        img.src = 'imgtarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imgnoite.png'
        document.body.style.background = '#515154'
    }
}