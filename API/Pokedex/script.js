let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    let response = await fetch(url);
    let currentPokemon = await response.json();
    console.log('Loded pokemon', currentPokemon);

    renderPolemonInfo(currentPokemon);
}

function renderPolemonInfo(currentPokemon) {
    document.getElementById('pokemonImg').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
}