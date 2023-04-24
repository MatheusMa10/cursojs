var agora = new Date ()
var hr = agora.getHours()
console.log(`Agora é ${hr}hr`)
if (hr < 12) {
    console.log ('Bom Dia!')
} else if (hr < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}
