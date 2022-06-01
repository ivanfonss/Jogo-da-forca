
//tela iniciar e Adicionar palavra.
adcPalavra.addEventListener("mouseover", function(){
   trocaImagemAdc();
});
iniciar.addEventListener("mouseover", function(){
   trocaImagemInic();
});
imag.addEventListener("mouseover", function(){
   trocaATroca();
});
adcPalavra.addEventListener("click", function(){
   clickAdcPalavra();
});




//funções tela iniciar e Adicionar palavra.
function trocaImagemAdc(){
	let tela=document.getElementById('imag');
	tela.innerHTML='<img src="img/spw.png" alt="Logo Instagram">';
}
function trocaImagemInic(){
	let tela=document.getElementById('imag');
	tela.innerHTML='<img src="img/dpp.png" alt="Logo Instagram">';
}
function trocaATroca(){
	let tela=document.getElementById('imag');
	tela.innerHTML='<img src="img/test.png" alt="Logo Instagram">';
}
function clickIniciar(){
   alert("iniciar");
}
function clickAdcPalavra(){
   alert("adicionar palavra");
}