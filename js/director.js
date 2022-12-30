async function ListDirector(){
    const response= await fetch("API/peliculas.php?mode=ListDirector");
    const data= await response.json();
    buscadorFuncional(data)
    return data;
}

function buscadorFuncional(data) {

    const resultado = document.querySelector('#resultado_buscar');
    const formulario = document.querySelector('#search');

    const filtrar = () => {
        resultado.classList.add('visible')
        resultado.classList.remove('oculto')
        resultado.innerHTML = '';
        const texto = formulario.value.toLowerCase();

        data.forEach(producto => {
                let nombre = producto.title.toLowerCase();
                if (nombre.indexOf(texto) !== -1) {
                    resultado.innerHTML += `
                    <a style=text-decoration:none;  href=?metodo=mostrarProducto&producto=${producto.director}><li>${producto.director}</li></a>
                    `
                }
                
        })
        if (resultado.innerHTML == '') {
            resultado.innerHTML = `
            <li>Producto no encontrado</li>
            `
        }
    }
    
    formulario.addEventListener('keyup', filtrar)
    
}
ListDirector().then(data=>{
    console.log(data)
    data.forEach(function(films){
        newCardDirector(films);
    })
})

const tpl__films=document.getElementById('tpl__cards');
const container=document.querySelector('.collection');
function newCardDirector(films){
    const tpl = tpl__films.content;
	const clon = tpl.cloneNode(true);
    clon.querySelector('.image').setAttribute("src", films.img);
    clon.querySelector('.name').textContent=films.director;
    clon.querySelector('.title').textContent=films.title;
    container.appendChild(clon);
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, "outDuration");
  });

  const formulario = document.querySelector('#search');
  const resultado = document.querySelector('#resultado_buscar');
  formulario.addEventListener('focusout', e => {
      resultado.innerHTML=""
  })
  document.querySelector('.sort').addEventListener('click', e=>{
    ListDirector().then(data=>{
        container.innerHTML="";
        data.sort().forEach(function(films){
            newCardDirector(films);
        })
    })
})
document.querySelector('.reverse').addEventListener('click', e=>{
    ListDirector().then(data=>{
        container.innerHTML="";
        data.reverse().forEach(function(films){
            newCardDirector(films);
        })
    })
})

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });