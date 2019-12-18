axios = require("axios");

async function showSnorlax() {
    let info = await axios.get("https://pokeapi.co/api/v2/pokemon/snorlax/")
    let data = info.data
    let name = data.name
    console.log(name);
}

showSnorlax();

async function showMoves() {
    let info = await axios.get("https://pokeapi.co/api/v2/pokemon/snorlax/")
    let moves = info.data.moves

    for (move of moves) {
        let moveName = move.move.name
        console.log(moveName)
    }
}

showMoves();