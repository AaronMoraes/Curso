var frm = document.querySelector("form")
var resposta = document.querySelector("h3")
frm.addEventListener("submit", (e) => {
var altura = frm.altura
var peso = frm.peso
var imc = (peso/(altura*altura))
var categoria


if(imc<18.5){
    categoria="Seu IMC está abaixo do normal!"
}else if(imc>=18.5 && imc<24.9){
    categoria="Seu IMC está Regular!"
}else if(imc<=25.0 && imc<29.9){
    categoria="Seu IMC está acima do normal, Obesidade Nível 1!"
}else if(imc>=30){    
    categoria="Seu IMC está maior do que o Normal, Obesiadade Nível 2, Procure um Médico!"
}else{
}

resposta.innerText = (`Seu IMC: ${imc}`)

}

