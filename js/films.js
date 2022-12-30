document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, "onOpenStart");
  });
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, "onOpenStart");
  });
//Asynchronous function to list movies
async function ListFilms(){
    const response= await fetch("API/peliculas.php?mode=ListFilms");
    const data= await response.json();
    Search(data);
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
function Search(data) {
    //HTML component declaration
    const result = document.querySelector('#resultado_buscar');
    const formSearch = document.querySelector('#search');
    //
    const filter = () => {
        //We apply style so that the results box is displayed
        result.classList.add('visible')
        result.classList.remove('oculto')
        result.innerHTML = '';
        //I declare the text that is written in the search engine
        const text = formSearch.value.toLowerCase();
        //I loop through the data obtained from the asynchronous function
        data.forEach(product => {
                //I declare the obtained title and parse it to lower case
                let name = product.title.toLowerCase();
                //I check that the variable is not empty
                if (name.indexOf(text) !== -1) {
                    result.innerHTML += `
                    <a style=text-decoration:none;><li>${product.title}</li></a>
                    `
                }
                
        })
        //If the variable "name" is empty, this conditional is executed
        if (result.innerHTML == '') {
            result.innerHTML = `
            <li>producto no encontrado</li>
            `
        }
    }
    //Detect if a key was pressed in the browser and execute the function
    formSearch.addEventListener('keyup', filter)
    
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
    clon.querySelector('.card-href').setAttribute("href", "?view=Capitulos&id="+films.id);
    container.appendChild(clon);
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, "outDuration");
  });

  const formSearch = document.querySelector('#search');
const result = document.querySelector('#resultado_buscar');
//I detect when the search engine is not focused
formSearch.addEventListener('focusout', e => {
    result.innerHTML=""
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
  
