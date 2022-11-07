const palabras = ['extremo', 'astronauta', 'salida', 'sencillo', 'agua', 'orbita', 'brillo', 'tumbado', 'fierro', 'emblema'];
const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraGuion = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
document.querySelector('#output').innerHTML = palabraGuion;

document.querySelector('#boton').addEventListener('click', () => {
    const letra = document.querySelector('#letra').value;
    let haFallado = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraGuion = palabraGuion.replaceAt(i*2,letra);
            haFallado = false;

        }
    }

    if(haFallado){
        contadorFallos++;
        if(contadorFallos < 5){
        document.querySelector('#hangman').style.backgroundPosition = -(153.5*contadorFallos) + 'px 0';
        return
    }
        if(contadorFallos == ((palabra.length*1)+5)){
            alert("perdiste el juego");
            setInterval('refrescar()',1000);        
        }
    }else 
    if(palabraGuion.indexOf('_') <0){
            document.querySelector('#ganador').style.display = 'flex'
        }

    document.querySelector('#output').innerHTML = palabraGuion;
    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus;
})

String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }

function refrescar(){
    location.reload()
}