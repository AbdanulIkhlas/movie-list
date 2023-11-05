const search = document.querySelector("#search");
let cards;
//! Fetch API menggunakan axios
function onChangeSearch(searchParameter){
    axios.get("http://www.omdbapi.com/?apikey=d684a20e&s=" + searchParameter, {

    })
    .then(function (response) {
        const movies = response.data.Search;
        console.log(movies);
        cards = '';
        movies.forEach(data => cards += showCards(data));
        console.log(cards)
        // if(response.data.Title){
        // }else{
        //     movie.Title = "Tidak Ada Filmnya.."
        //     movie.Poster = "uu"
        // }
        
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        const allCards = document.querySelector('.all-cards');

        // allCards.innerHTML = showCards(movie);
        allCards.innerHTML = cards;
    }); 
}

function showCards(data){
    console.log(data)
    // let countryArray = data.Country.split(', ');
    // let country = countryArray[0];
    // <div class="tahun"> ${data.Year} </div>
    return `
    <div class="container-card">
        <div class="card">
            <div class="info">
                <div class="negara"> ${data.Year} </div>
            </div>
            <img id="gambar" src="${data.Poster}" alt="">
            <div class=" genre"> ${data.Type}</div>
        </div>
        <label for="gambar" id="judul"> ${data.Title} </label>
        <div id="tooltip"> ${data.Title}</div>
    </div>
    `
}
// ! event untuk searching
search.addEventListener('blur', function(){
    onChangeSearch(search.value);
})