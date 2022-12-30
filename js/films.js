document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, "onOpenStart");
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, "onOpenStart");
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems);
  });
//Asynchronous function to list movies
async function ListFilms(){
    const response= await fetch("API/peliculas.php?mode=ListFilms");
    const data= await response.json();
    buscadorFuncional(data);
    return data;
}
//Asynchronous function to add movies
async function AddMovie(form){
    const response= await fetch("API/peliculas.php?mode=AddMovie",{
        method:'post',
        body:form
    });
    const data= await response.json();
    window.reload()
}
//Search function
function buscadorFuncional(data) {
    //HTML component declaration
    const resultado = document.querySelector('#resultado_buscar');
    const formulario = document.querySelector('#search');
    //
    const filtrar = () => {
        //We apply style so that the results box is displayed
        resultado.classList.add('visible')
        resultado.classList.remove('oculto')
        resultado.innerHTML = '';
        //I declare the text that is written in the search engine
        const texto = formulario.value.toLowerCase();
        //I loop through the data obtained from the asynchronous function
        data.forEach(producto => {
                //I declare the obtained title and parse it to lower case
                let nombre = producto.title.toLowerCase();
                //I check that the variable is not empty
                if (nombre.indexOf(texto) !== -1) {
                    resultado.innerHTML += `
                    <a style=text-decoration:none;><li>${producto.title}</li></a>
                    `
                }
                
        })
        //If the variable "name" is empty, this conditional is executed
        if (resultado.innerHTML == '') {
            resultado.innerHTML = `
            <li>Producto no encontrado</li>
            `
        }
    }
    //Detect if a key was pressed in the browser and execute the function
    formulario.addEventListener('keyup', filtrar)
    
}

ListFilms().then(data=>{
    data.forEach(function(films){
        newCardFilms(films);
    })
})

const tpl__films=document.getElementById('tpl__cardsFilms');
const container=document.querySelector('.container');
//I assign the data to the template to display it in the html
function newCardFilms(films){
    const tpl = tpl__films.content;
	const clon = tpl.cloneNode(true);
    clon.querySelector('.image').setAttribute("src", films.img);
    clon.querySelector('.card-title').textContent=films.title;
    clon.querySelector('.card-content').textContent=films.description;
    clon.querySelector('.card-href').setAttribute("href", films.redirection);
    container.appendChild(clon);
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, "outDuration");
  });

  const formulario = document.querySelector('#search');
const resultado = document.querySelector('#resultado_buscar');
//I detect when the search engine is not focused
formulario.addEventListener('focusout', e => {
    resultado.innerHTML=""
})
//A-z filter
document.querySelector('.sort').addEventListener('click', e=>{
    ListFilms().then(data=>{
        container.innerHTML="";
        data.sort().forEach(function(films){
            newCardFilms(films);
        })
    })
})
//Z-a filter
document.querySelector('.reverse').addEventListener('click', e=>{
    ListFilms().then(data=>{
        container.innerHTML="";
        data.reverse().forEach(function(films){
            newCardFilms(films);
        })
    })
})



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, "onOpenStart");
    const form=document.getElementById('form');
    form.addEventListener("submit", function(e){
    e.preventDefault();
    var datosFormulario= new FormData(form);
    AddMovie(datosFormulario);
    window.location.href="?view=Home"
})

  });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
  
