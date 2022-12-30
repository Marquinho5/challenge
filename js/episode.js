async function ListEpisode(){
    const response= await fetch("API/peliculas.php?mode=ListEpisode&id="+id);
    const data= await response.json();
    return data;
}
const id=document.querySelector('body').getAttribute('id');
console.log(id)
ListEpisode().then(data=>{
    console.log(data)
    data.info.forEach(function(episode){
        newCardDirector(episode);
    })
})

const tpl__card=document.getElementById('tpl__cardsEpisodes');
const container=document.querySelector('.list');
function newCardDirector(episode){
    const tpl = tpl__card.content;
	const clon = tpl.cloneNode(true);
    clon.querySelector('.image').setAttribute("src", episode.img);
    clon.querySelector('.episode').textContent="Episodio "+episode.numEpisode;
    clon.querySelector('.title').textContent=episode.title;
    clon.querySelector('.duration').textContent="Duracion: "+episode.duration;
    container.appendChild(clon);
}