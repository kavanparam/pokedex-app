function start(){
    // Name
    console.log("Hello World");
    const pokemonName = 'Mew';
    const pokemonNameMessage = "Pokemon Name: " + pokemonName;
    document.getElementById("name").innerHTML = pokemonNameMessage; //changes HTML code
 
    // Image
    const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png";

    document.getElementById('image').src = imageUrl;
}