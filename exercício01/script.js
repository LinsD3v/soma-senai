function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")
     //console.log(numero1, numero2)
     resposta.textContent = numero1 + numero2
}

function sub(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var resposta = document.getElementById("respSub")
    resposta.textContent = numero3 - numero4

}

function multi(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var resposta = document.getElementById("respMulti")
    resposta.textContent = numero5 * numero6
}
    
function div(){
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var resposta = document.getElementById("respDiv")

    if(numero8 !== 0){
    resposta.textContent = numero7 / numero8
    }else{
        resposta.textContent = "não se divide por 0"
    }

}