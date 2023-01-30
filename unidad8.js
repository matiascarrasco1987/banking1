var cajacardsAPP = document.getElementById('caja1')
var cajacardsTARJETA = document.getElementById('caja2')
var cajacardsPF = document.getElementById('caja3')
var cajacardsPMO = document.getElementById('caja4')
var cajacardsCAHSBACK = document.getElementById('caja5')

function verinfoAPP() {
	cajacardsAPP.style.display = 'block'
	cajacardsTARJETA.style.display = 'none'
	cajacardsPF.style.display = 'none'
	cajacardsPMO.style.display = 'none'
	cajacardsCAHSBACK.style.display = 'none'
}

function verinfoTARJETA() {
	cajacardsTARJETA.style.display = 'block'
	cajacardsAPP.style.display = 'none'
	cajacardsPF.style.display = 'none'
	cajacardsPMO.style.display = 'none'
	cajacardsCAHSBACK.style.display = 'none'
}

function verinfoPF() {
	cajacardsAPP.style.display = 'none'
	cajacardsTARJETA.style.display = 'none'
	cajacardsPF.style.display = 'block'
	cajacardsPMO.style.display = 'none'
	cajacardsCAHSBACK.style.display = 'none'
}

function verinfoPMO() {
	cajacardsAPP.style.display = 'none'
	cajacardsTARJETA.style.display = 'none'
	cajacardsPF.style.display = 'none'
	cajacardsPMO.style.display = 'block'
	cajacardsCAHSBACK.style.display = 'none'
}

function verinfoCASHBACK() {
	cajacardsAPP.style.display = 'none'
	cajacardsTARJETA.style.display = 'none'
	cajacardsPF.style.display = 'none'
	cajacardsPMO.style.display = 'none'
	cajacardsCAHSBACK.style.display = 'block'
}

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle("abajo",window.scrollY>0)
})

window.addEventListener('load', function(){

	var imagenes = [];

	imagenes[0] = 'assets/img/slider1.jpg';
	imagenes[1] = 'assets/img/slider2.jpg';
	imagenes[2] = 'assets/img/slider3.jpg';
	imagenes[3] = 'assets/img/slider4.jpg';
	imagenes[4] = 'assets/img/slider5.jpg';

	var indiceImagenes = 0

	function cambiarImagenes() {

	document.slider.src = imagenes[indiceImagenes];

	if (indiceImagenes < 4) {
		indiceImagenes++;
	} else {
		indiceImagenes = 0;
	}
	}

	setInterval(cambiarImagenes, 2500)

})