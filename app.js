//javascript do game mata mosquito

var altura = 0
var largura = 0
var vidas = 1
var tempo = 50
var criaMoscaTempo = 1500
var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'normal'){
	criaMoscaTempo = 1500
}else if(nivel === 'dificil'){
	criaMoscaTempo = 1000
}else if(nivel === 'vini'){
	criaMoscaTempo = 850
}
function ajustaTamanho(){
	altura = window.innerHeight
	largura = window.innerWidth
	console.log(largura, altura)
}
ajustaTamanho()

var cronometro1 = setInterval(function(){
	tempo-=1
	if(tempo < 0){
		clearInterval(cronometro1)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
},2000)

function posicaoRandomica(){
	
	if(document.getElementById('mosquito')){
	document.getElementById('mosquito').remove()
	if(vidas > 3){
		window.location.href = 'fim_de_jogo.html'
	}else{
		document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
		vidas++
		}
	}

	var posicaox = Math.floor(Math.random() * largura) - 90
	var posicaoy = Math.floor(Math.random() * altura) - 90
	console.log(posicaox, posicaoy)

	posicaox = posicaox < 0 ? 0 : posicaox
	posicaoy = posicaoy < 0 ? 0 : posicaoy

	//criar o elemento HTML
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + lado()
	mosquito.style.left = posicaox + 'px'
	mosquito.style.top = posicaoy + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
	}
	document.body.appendChild(mosquito)
}
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'
			
		case 2:
			return 'mosquito3'
	}
}
function lado(){
	var lado = Math.floor(Math.random() * 2)

	switch(lado){
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}
}

