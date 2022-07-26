//Scripts that run on page load
function start(){

     //Search on enter keypress
     var input = document.getElementById("search-bar");
     input.addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
         event.preventDefault();
         document.getElementById("search-button").click();
     }
     });

}


//Receives the JSON obj coming from PokeAPI
function fetchPokemon(){
    const requestURL = "https://pokeapi.co/api/v2/pokemon/";
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();

    fetch(requestURL+searchTerm).then((x) => x.json()).then((obj) => {
        displayPokemon(obj);
    });
}

//Interpret the received object
function displayPokemon(obj){
    document.getElementById("main-flex").style.display = "flex"; //Show main flex container

    // Name
    document.getElementById("name").innerHTML = "Pokemon Name: " + obj.name; 

    // Image
    document.getElementById('image').src = obj.sprites.front_default;


    
    // Move list
    document.getElementById("move-list").innerHTML = "";
    let moveList = "";

    //If there are 10 or more moves
    if(Object.keys(obj.moves).length>=10){
        //Display the first 10 moves
        for(let i=0; i<10; i++)
            moveList += `<li>${obj.moves[i].move.name}</li>`;

        moveList += "<li><button id='show-full-list' onclick='fullMoveList()' style='opacity:0.9'> ... </button></li>"; //Prompt to show full move list

        let fullMoveList = "";
        for(let i=10; i<Object.keys(obj.moves).length; i++){    //Hidden full-move-list that shows up on prompt click
            fullMoveList += `<li>${obj.moves[i].move.name}, </li>`;
        }
        document.getElementById("full-move-list").innerHTML = fullMoveList;
        

        // document.getElementById("show-full-list").addEventListener("click", fullMoveList);

    }
    //If there aren't 10 moves
    else{
        //Display all moves
        for(i in obj.moves){
            moveList += `<li>${obj.moves[i].move.name}</li>`;
        }
    }
    document.getElementById("move-list").innerHTML = moveList;


    document.getElementById("views-container").style.display = "block";  //Show additional views section (on button click)

    document.getElementById("image-flex").innerHTML = ""; //Resets images on new Pokemon search
    for(img in obj.sprites){
        if(typeof(obj.sprites[img]) === 'string'){
            // console.log(obj.sprites[img]);
            document.getElementById("image-flex").innerHTML += `<img src="${obj.sprites[img]}"/>`;
        }
    }

}

//How to display full move list of the current pokemon object?
function fullMoveList(){

    document.getElementById("full-move-list").style.display = "block";
    
    // console.log(obj.moves[0].move.name);
    

    // document.getElementById("move-list").innerHTML = "";
    // let moveList = "";
    // for(i in obj.moves){
    //     moveList += `<li>${obj.moves[i].move.name}</li`;
    // }
    // document.getElementById("move-list").innerHTML = moveList;
}

