
let genre = document.getElementById("genres")
let listmovie = document.getElementById("listmovies")

//Pengambilan API Genre
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=292eaacbd78162b728a78ac4a82a3f9f&language=en-US')
.then(response => response.json())
.then(data => {
    console.log(data);
    data.genres.forEach(showGenre)
})

function showGenre(val,idx){
    genre.innerHTML += ` <div class="d-grid gap-2 col-6 mx-auto mt-4">
    <button onclick="getGenre(${val.id})" class="btn btn-primary" type="button">${val.name}</button>
    </div>`
    
}
function getGenre(id){
    //Pengambilan API List Movie
    console.log(id)
    fetch ('https://api.themoviedb.org/3/discover/movie?api_key=292eaacbd78162b728a78ac4a82a3f9f&with_genres='+id)
    .then(response => response.json())
    .then(data => {
        listmovie.innerHTML = ""
        console.log(data);  
        data.results.forEach(showListMovie)
    })
    }
    
    function showListMovie(val,idx){
        listmovie.innerHTML += `<div class="col-lg-6 card" style="max-width: 540px;">
        <img src="https://image.tmdb.org/t/p/original/${val.poster_path}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${val.original_title}</h5>
          <p class="card-text">${val.overview}</p>
        </div>
      </div>`
    }
      
    

















