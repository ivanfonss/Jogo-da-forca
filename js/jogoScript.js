

const palavras=["ONIBUS","MONITOR","GRIFO","LIVRO","FREEZER","SPRAY","GROSENHA","KIWI","LICHIA","HAMISTER","ALPACA","VALSA","JAZZ","JUIZ"];
const dicas=["Transporte","Video","Animal fantastico","Historia","Objeto","Objeto","Fruta","Fruta","Fruta","Animal","Animal","Dança","Musica","Profissão"];
const tecPres=[];

//Campo teste





//fim campo  teste
console.log(palavras,dicas);
//Captura de botoes do HTML.

var adicionaP=document.getElementById('adiciona-p');
var adicionaD=document.getElementById('adiciona-d');

var adcPalavra=document.getElementById('adcPalavra');


var corpo=document.getElementById('corp')

//contadores 
var contador=0;
var contaVit=0;

//Monta tela de jogo. 
telaInicial();

//Captura os eventos do teclado e simula um click.
document.addEventListener ('keypress', function(event){
    if(event.keyCode <65){
        caixaAlta()
    }else if(event.keyCode >90){
        caixaAlta()
    }else{
    let tecla = event.key;
    document.getElementById(tecla).click(); 
    }
});

//Recarrega a pagina a cada botao de novo jogo;


//chama tela de adicionar palavra
function telaInicial(){
    document.getElementById('areaDicas').style.display='none';
    document.getElementById('palavra').style.display='none';
    document.querySelector('.teclado').style.display='none';
    document.getElementById('forc').style.display='none';
    document.getElementById('inic').style.display='flex';
    document.getElementById('imag').style.display='flex';  

    document.getElementById('fec').style.display='none';  
    document.getElementById('adc').style.display='none';  
    document.getElementById('des').style.display='none';  
}
function adiciona(){
    contador=0;
    contaVit=0;
    document.getElementById('palavra').innerHTML='';
    document.getElementById('areaDicas').innerHTML='';
    desabitateclado();
    document.getElementById('adc').style.display="block";
    document.getElementById('adc').style.backgroundColor="#AB6D23";   
}

function sorteiaPalavra() {
    let nAleatorio = Math.floor(Math.random() * palavras.length);

    palavraSorteada = palavras[nAleatorio];
    dicaSorteada= dicas[nAleatorio];
}
function geraDicas (){
    document.getElementById("areaDicas").innerHTML='<h1>Esta relacionada com "'+dicaSorteada+'". </h1>';
}
function geraPalavra(){
    let pala = palavraSorteada.split('');
    
    for (var i = 0; i < pala.length; i++){
    let local = document.getElementById("palavra");
    let area = document.createElement("textarea");
    area.name = 'letra';
    area.maxLength = 1;
    area.cols = 1;
    area.rows = 1;
    area.className = 'letraOculta';
    area.setAttribute('id', 'letra'+i)
    area.setAttribute('placeholder','_')
    local.appendChild(area);
 
    }
}
function desabitateclado(){
    document.getElementById('A').disabled=true;
    document.getElementById('B').disabled=true;
    document.getElementById('C').disabled=true;
    document.getElementById('D').disabled=true;
    document.getElementById('E').disabled=true;
    document.getElementById('F').disabled=true;
    document.getElementById('G').disabled=true;
    document.getElementById('H').disabled=true;
    document.getElementById('I').disabled=true;
    document.getElementById('J').disabled=true;
    document.getElementById('K').disabled=true;
    document.getElementById('L').disabled=true;
    document.getElementById('M').disabled=true;
    document.getElementById('N').disabled=true;
    document.getElementById('O').disabled=true;
    document.getElementById('P').disabled=true;
    document.getElementById('Q').disabled=true;
    document.getElementById('R').disabled=true;
    document.getElementById('S').disabled=true;
    document.getElementById('T').disabled=true;
    document.getElementById('V').disabled=true;
    document.getElementById('U').disabled=true;
    document.getElementById('W').disabled=true;
    document.getElementById('X').disabled=true;
    document.getElementById('Y').disabled=true;
    document.getElementById('Z').disabled=true;
}
function habitateclado(){
    document.getElementById('A').disabled=false;
    document.getElementById('B').disabled=false;
    document.getElementById('C').disabled=false;
    document.getElementById('D').disabled=false;
    document.getElementById('E').disabled=false;
    document.getElementById('F').disabled=false;
    document.getElementById('G').disabled=false;
    document.getElementById('H').disabled=false;
    document.getElementById('I').disabled=false;
    document.getElementById('J').disabled=false;
    document.getElementById('K').disabled=false;
    document.getElementById('L').disabled=false;
    document.getElementById('M').disabled=false;
    document.getElementById('N').disabled=false;
    document.getElementById('O').disabled=false;
    document.getElementById('P').disabled=false;
    document.getElementById('Q').disabled=false;
    document.getElementById('R').disabled=false;
    document.getElementById('S').disabled=false;
    document.getElementById('T').disabled=false;
    document.getElementById('U').disabled=false;
    document.getElementById('T').disabled=false;
    document.getElementById('W').disabled=false;
    document.getElementById('X').disabled=false;
    document.getElementById('Y').disabled=false;
    document.getElementById('Z').disabled=false;

}
function resetaTeclado(){
    document.getElementById('A').setAttribute('class', 'botao-let');
    document.getElementById('B').setAttribute('class', 'botao-let');
    document.getElementById('C').setAttribute('class', 'botao-let');
    document.getElementById('D').setAttribute('class', 'botao-let');
    document.getElementById('E').setAttribute('class', 'botao-let');
    document.getElementById('F').setAttribute('class', 'botao-let');
    document.getElementById('G').setAttribute('class', 'botao-let');
    document.getElementById('H').setAttribute('class', 'botao-let');
    document.getElementById('I').setAttribute('class', 'botao-let');
    document.getElementById('J').setAttribute('class', 'botao-let');
    document.getElementById('K').setAttribute('class', 'botao-let');
    document.getElementById('L').setAttribute('class', 'botao-let');
    document.getElementById('M').setAttribute('class', 'botao-let');
    document.getElementById('N').setAttribute('class', 'botao-let');
    document.getElementById('O').setAttribute('class', 'botao-let');
    document.getElementById('P').setAttribute('class', 'botao-let');
    document.getElementById('Q').setAttribute('class', 'botao-let');
    document.getElementById('R').setAttribute('class', 'botao-let');
    document.getElementById('S').setAttribute('class', 'botao-let');
    document.getElementById('T').setAttribute('class', 'botao-let');
    document.getElementById('U').setAttribute('class', 'botao-let');
    document.getElementById('V').setAttribute('class', 'botao-let');
    document.getElementById('W').setAttribute('class', 'botao-let');
    document.getElementById('X').setAttribute('class', 'botao-let');
    document.getElementById('Y').setAttribute('class', 'botao-let');
    document.getElementById('Z').setAttribute('class', 'botao-let');
}
function entradaLetras(x){
    let key=x;
    let pala = palavraSorteada.split('');
    let conta=0;
    
    for (var i = 0; i < pala.length; i++){
        let forca=document.getElementById('letra'+i);
        if(key == pala[i]){
            forca.value=pala[i];
            contaVit++;
            document.getElementById(key).disabled = true;
            console.log("contador de acertos "+contaVit);
            document.getElementById(key).setAttribute ("class","acerto");
        }else {
            document.getElementById("err-lt").value=key;
            conta++
            //console.log(conta);
        }
    }
    if (conta == pala.length){
        contador++;
        console.log("Contador de erros "+contador)
        document.getElementById(key).disabled = true;
        document.getElementById(key).setAttribute ("class","clicado");
    }else if(contaVit == pala.length){
        ganhou();
    }
    conta=0;
    imgForca(contador)
    perdeu(contador);
    
}
function desistir(){
    document.getElementById('des').style.display='block';
}
function ganhou(){
    document.getElementById('gan').style.display='block';
    document.getElementById('gan').style.backgroundColor='#2c632c';

}
function perdeu(X){
    if(X == 6){
    document.getElementById('per').style.display='block';
    }
}
function caixaAlta(){
    document.getElementById('fec').setAttribute('id','popup');  
}
function imgForca(){
    if(contador>=0 && contador<=6){
        document.getElementById('forc').innerHTML='<img src="img/forca'+contador+'.png" alt="forca'+contador+'">';
    }
}
function montaJogo(){
    
    resetaTeclado()
    document.getElementById('inic').style.display='none';
    document.getElementById('imag').style.display='none';  
    document.getElementById('areaDicas').style.display='block';
    document.getElementById('palavra').style.display='flex';
    document.querySelector('.teclado').style.display='flex';
    document.getElementById('forc').style.display='flex';
    document.getElementById('palavra').innerHTML='';
    habitateclado();
    sorteiaPalavra();
    geraPalavra();
    geraDicas ();
    contaVit=0;
    contador=0;
    console.log(contador,contaVit)
    imgForca();
    fecharPopUp();
    document.getElementById('des').style.display='none';
}

function adicionarPalavra(){
    
    if(adicionaP.value=='' ||adicionaD.value ==''){
        console.log("não aceita valor vazio")
        adicionaP.setAttribute('placeholder', 'Não pode estar vazio');
        adicionaD.setAttribute('placeholder', 'Não pode estar vazio')
    }else{
    palavras.push(adicionaP.value);
    dicas.push(adicionaD.value)
    document.getElementById('adc').style.display="none";
    
    alert('adicionado')
    console.log(palavras,dicas);
    contador=0;
    contaVit=0;
    montaJogo()
    }
}
function fecharPopUp(){
    document.getElementById('des').style.display='none';
    document.getElementById('per').style.display='none';
    document.getElementById('gan').style.display='none';
    document.getElementById('adc').style.display="none";
}
