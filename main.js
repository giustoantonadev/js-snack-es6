console.log('it works');
/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// Creazione array di oggetti bici

const bici = [
    {
        nome: "Bici Pinarello Dogma",
        peso: 7.5
    },
    {
        nome: "Bici Bianchi Oltre",
        peso: 7.1
    },
    {
        nome: "Bici Specialized Tarmac",
        peso: 7.6
    },
    {
        nome: "Bici Trek Emonda",
        peso: 7.8
    },
    {
        nome: "Bici Cervélo R5",
        peso: 7.0
    },
    {
        nome: "Bici Colnago C64",
        peso: 6.8
    },
    {
        nome: "Bici Cannondale SuperSix",
        peso: 7.2
    },
    {
        nome: "Bici Giant TCR",
        peso: 7.0
    },
    {
        nome: "Bici Scott Addict",
        peso: 7.6
    },
    {
        nome: "Bici Factor One",
        peso: 7.0
    },
];

// Trova la bici con peso minore
let biciLeggera = bici[0];

for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

// Stampa a schermo
console.log(biciLeggera);
