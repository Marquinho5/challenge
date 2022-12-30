document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, "onOpenStart");
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, "onOpenStart");
  });
async function ListDirector(){
    const response= await fetch("API/peliculas.php?mode=ListDirector");
    const data= await response.json();
    Search(data)
    return data;
}

function Search(data) {

    const result = document.querySelector('#resultado_buscar');
    const formSearch = document.querySelector('#search');

    const filter = () => {
        result.classList.add('visible')
        result.classList.remove('oculto')
        result.innerHTML = '';
        const text = formSearch.value.toLowerCase();

        data.info.forEach(product => {
                let name = product.title.toLowerCase();
                if (name.indexOf(text) !== -1) {
                    result.innerHTML += `
                    <a style=text-decoration:none;  href=?metodo=mostrarProducto&producto=${product.director}><li>${product.director}</li></a>
                    `
                }
                
        })
        if (result.innerHTML == '') {
            result.innerHTML = `
            <li>Producto no encontrado</li>
            `
        }
    }
    
    formSearch.addEventListener('keyup', filter)
    
}
ListDirector().then(data=>{
    console.log(data)
    data.info.forEach(function(films){
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

  const formSearch = document.querySelector('#search');
  const result = document.querySelector('#resultado_buscar');
  formSearch.addEventListener('focusout', e => {
      result.innerHTML=""
  })
  document.querySelector('.sort').addEventListener('click', e=>{
    ListDirector().then(data=>{
        container.innerHTML="";
        data.info.sort().forEach(function(films){
            newCardDirector(films);
        })
    })
})
document.querySelector('.reverse').addEventListener('click', e=>{
    ListDirector().then(data=>{
        container.innerHTML="";
        data.info.reverse().forEach(function(films){
            newCardDirector(films);
        })
    })
})

$(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });