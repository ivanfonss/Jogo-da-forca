const palavras= ["onibus","monitor","grifo","livro"];
const dicas=["trasporte","video","animal fantasia","historia"];
const alfabetoMin=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const lafabetoMai=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];
const presLetras=[];


var palavraSorteada;
var dicaSorteada;
var contador= 0;
var contadorVit=0;

sorteiaPalavra();
geraPalavra();
geraDicas();


document.addEventListener ('keypress', function(event){
    let pala = palavraSorteada.split('');
    let keyName = event.key;
    contador++;
    let letras = document.getElementById('err-lt');
    for (var i = 0; i < pala.length; i++){
        let forca=document.getElementById('letra'+i);
        if(keyName == pala[i]){
            forca.value=pala[i];
            contador--;
            
        }else{
            presLetras.push(keyName);
        } 
        ganhou();
    }
    
    letras.value=[...new Set(presLetras)];
    
    console.log(contador);
    console.log(contadorVit);
    perdeu();
    
});

function sorteiaPalavra() {
    let nAleatorio = Math.floor(Math.random() * palavras.length);

    palavraSorteada = palavras[nAleatorio];
    dicaSorteada= dicas[nAleatorio];
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
    local.appendChild(area);
 
    }
}
function geraDicas (){
    document.getElementById("areaDicas").innerHTML='<h1>Lembre-se que a dica dessa palavra é "'+dicaSorteada+'". </h1>';
}
function perdeu(){
    if(contador==8){
        alert("perdeu");
    }else if(contador >8){
        contador =0;
    }
}
function ganhou(){
    let pala = palavraSorteada.split('');
    for (var i = 0; i < pala.length; i++){
        let forca=document.getElementById('letra'+i);
        if(forca.textContent !== "" && contadorVit <pala.length){
            contadorVit++;
        }else if(contadorVit == pala.length){
            alert("ganhou");
        } 
        
    }
}