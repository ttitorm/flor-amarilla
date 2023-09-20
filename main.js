const flow = document.querySelector('.flower');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');
const elementos = document.querySelectorAll('.transition-element');
const contenido = document.getElementById('container')
const expand = document.getElementById('expand')


function flower(){
    p1.classList.add('transicion-suave');
    p1.style.transform = 'rotate(22deg)';

    p2.classList.add('transicion-suave');
    p2.style.transform = 'rotate(67deg)';

    p3.style.transform = 'rotate(45deg)';
    p3.classList.add('transicion-suave');
    p3.style.transform = 'rotate(112deg)';

    p4.style.transform = 'rotate(90deg)';
    p4.classList.add('transicion-suave');
    p4.style.transform = 'rotate(157deg)';


    p4.addEventListener('transitionend', function handler() {
        // Elimina el event listener para evitar que se dispare múltiples veces
        p4.removeEventListener('transitionend', handler);
        
        // Ejecuta la función de resolución de la Promesa después de la transformació
        reboteFlower();
    })
}

function reboteFlower()
{
        flow.classList.add('rebote');
}



function fadeInOut(){
    elementos.forEach(elemento => {
      elemento.classList.add('show');
    });
}

function contenidoFade(){
    if (contenido.classList.contains('show')){
        contenido.classList.remove('show');

    }else{
        contenido.classList.add('show')

    }

}


document.addEventListener('DOMContentLoaded', flower);
document.addEventListener('DOMContentLoaded', fadeInOut);
expand.addEventListener('click', contenidoFade);

