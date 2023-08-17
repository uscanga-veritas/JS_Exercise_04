function EJ1() {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

function EJ2() {
    const numeroUsuario = parseInt(prompt("Por favor, introduce un número:"));
    const pokemones = [
        "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon",
        "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie",
        "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill",
        'pidgey', 'pidgeotto', 'pidgeot', 'rattata', 'raticate', 'spearow', 'fearow',
        'ekans', 'arbok', 'pikachu', 'raichu', 'sandshrew', 'sandslash', 'nidoran-f', 'nidorina',
        'nidoqueen', 'nidoran-m', 'nidorino', 'nidoking', 'clefairy', 'clefable', 'vulpix', 'ninetales',
        'jigglypuff', 'wigglytuff', 'zubat', 'golbat', 'oddish', 'gloom', 'vileplume', 'paras',
        'parasect', 'venonat', 'venomoth', 'diglett', 'dugtrio', 'meowth', 'persian', 'psyduck', 'golduck',
        'mankey', 'primeape', 'growlithe', 'arcanine', 'poliwag', 'poliwhirl', 'poliwrath', 'abra', 'kadabra',
        'alakazam', 'machop', 'machoke', 'machamp', 'bellsprout', 'weepinbell', 'victreebel', 'tentacool', 
        'tentacruel', 'geodude', 'graveler', 'golem', 'ponyta', 'rapidash', 'slowpoke', 'slowbro', 'magnemite',
        'magneton', 'farfetchd', 'doduo', 'dodrio', 'seel', 'dewgong', 'grimer', 'muk', 'shellder', 'cloyster',
        'gastly', 'haunter', 'gengar', 'onix', 'drowzee', 'hypno', 'krabby', 'kingler', 'voltorb'
    ];

    for (let i = 1; i <= numeroUsuario; i++) {
        if (i % 5 === 0) {
            console.log(pokemones[i - 1]);
        }
    }
}

function EJ3() {
    const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

    for (const elemento of arreglo) {
        if (typeof elemento === "number") {
            console.log(elemento);
        }
    }
}