const search = document.querySelector("#search");
let movie

//! Fetch API menggunakan axios
function onChangeSearch(searchParameter){
    axios.get("http://www.omdbapi.com/?apikey=d684a20e&t=" + searchParameter, {

    })
    .then(function (response) {
        if(response.data.Title){
            movie = response.data;
        }else{
            movie.Title = "Tidak Ada Filmnya.."
            movie.Poster = "uu"
        }
        
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        const main = document.querySelector('#main');

        main.innerHTML = showCards(movie);
    }); 
}

function showCards(data){
    return `
    <div class="card">
        <h1>${data.Title}</h1>
        <img src="${data.Poster}"
            title="${data.Title}">
    </div>
    `
}

// ! event untuk searching
input.addEventListener('blur', function(){
    onChangeSearch(input.value);
})