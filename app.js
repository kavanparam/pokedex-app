//For an initial Pokemon load -- depreciated
function start(){
    
    const requestURL = "https://pokeapi.co/api/v2/pokemon/";

    // //JavaScript promises
    // fetch(requestURL+"snorlax").then((x) => x.json()).then((obj) => {
    //     displayPokemon(obj);
    // });
}


//Receives the JSON obj coming from PokeAPI
function displayPokemon(obj){
    // Name
    const pokeName = obj.name;
        
    const pokemonNameMessage = "Pokemon Name: " + pokeName;
    document.getElementById("name").innerHTML = pokemonNameMessage; //changes HTML code

    // Image
    const imageUrl = obj.sprites.front_default;
    document.getElementById('image').src = imageUrl;


    // Move List
    const move1 = obj.moves[0].move.name;
    const move2 = obj.moves[1].move.name;
    const move3 = obj.moves[2].move.name;
    const move4 = obj.moves[3].move.name;
    document.getElementById("move-list").innerHTML = `<li>${move1}</li> <li>${move2}</li> <li>${move3}</li> <li>${move4}</li>`;

    //Additional Views
    //Load the section with visibility none on search button click
    document.getElementById("views-container").style.display = "block";

    // for(img in obj.sprites){
    //     console.log(img);
    //     console.log(Object.keys(img));
    // }

    //How can I iterate through sprite array and grab the image if it exists?

    //Manually fetching the sprtites
    document.getElementById('image2').src = obj.sprites.back_default;
    document.getElementById('image3').src = obj.sprites.back_female;
    document.getElementById('image4').src = obj.sprites.back_shiny;
    document.getElementById('image5').src = obj.sprites.back_shiny_female;
    document.getElementById('image6').src = obj.sprites.front_default;
    document.getElementById('image7').src = obj.sprites.front_female;
    document.getElementById('image8').src = obj.sprites.front_shiny;
    document.getElementById('image9').src = obj.sprites.front_shiny_female;

}

function fetchPokemon(){
    const searchTerm = document.getElementById("search-bar").value;

    const requestURL = "https://pokeapi.co/api/v2/pokemon/";

    fetch(requestURL+searchTerm).then((x) => x.json()).then((obj) => {
        displayPokemon(obj);
    });
}