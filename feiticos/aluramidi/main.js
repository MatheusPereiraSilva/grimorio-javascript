//função para reproduzir os sons
function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio).play();
    
    if (elemento != null && elemento.localName === 'audio') {
        
            elemento.play();     
        
    } else {
        alert('Elemento não encontrado');
    }
    
}

// lista de teclas do midi. 
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// tocar os sons 
for ( let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || 'Enter') {
            tecla.classList.add('ativa');
        }
        
    } 

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}


