var random = Math.round(Math.random()*4);
random++;
var contador=1;
var veces_jugadas= 0;
var ganados = 0;
var superior_uno = 0;

//ADMINISTRAR ANIMACION
function funcionPrincipal(numero){
    document.getElementById('imagen'+numero).classList.add('rotacion');
    setTimeout(function(){girar(numero)},500);
}

//GIRAR CARTAS
function girar(numero){
    var dorso = document.getElementById('dorso'+numero);
    var ganado = document.getElementById('ganado');
    
    //JOKER O DORSO
    if(numero==random){
        dorso.innerHTML = '<img src="img/joker.jpg" class="bien rotacion2">';
        ganado.innerHTML = '¡DESCUBIERTO EN EL INTENTO '+contador+'! PULSE REINICIAR.';
        ganado.style.display = 'block';
        document.getElementById('restar').style.backgroundColor = '#65E530';
        veces_jugadas++;
        if(contador<2){
            ganados++;
        }else{
            superior_uno++;
        }

        var versatil = document.getElementById('versatil');
        versatil.innerHTML = 'Has ganado '+ganados+' veces!'
        versatil.style.visibility = 'visible';
    }else{
        dorso.innerHTML = '<img src="img/error.jpg" class="error rotacion2">';      
        contador++; 
    }
}

//REINICIAR JUEGO
function reiniciar(){
    for(x=1;x<6;x++){
        var dorso = document.getElementById('dorso'+x);
        dorso.innerHTML = '<img src="img/carta.jpg" id="imagen'+x+'" onclick="funcionPrincipal('+x+')">';
        document.getElementById('imagen'+x).classList.remove('rotacion');
        document.getElementById('imagen'+x).classList.remove('rotacion2'); 
    }
    ganado.style.display = 'none';
    contador=1;
    document.getElementById('restar').style.backgroundColor = '';

    random = Math.round(Math.random()*4);
    random++;
}

//PUNTUACION DEL JUEGO
function puntuacion(){
    alert('Has jugado un total de '+veces_jugadas+' veces.\nHas escontrado al Joker '+ganados+' veces a la primera!\nHas escontrao al Joker '+superior_uno+' veces después del primer intento!');
}

