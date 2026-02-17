console.log('it works');
/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

// Crea array di bici da corsa

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
        peso: 6.5
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

// prende la bici col peso minore
let biciLeggera = bici[0];

for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }
}

// logga la bici più leggera
console.log(biciLeggera);

/*
Snack2**
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// crea array di squadre di calcio
const squadre = [
    {
        nome: "Palermo",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Juve Stabia",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Avellino",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Frosinone",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Venezia",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Monza",
        punti: 0,
        falli_subiti: 0
    }
];


//funzione che genera numeri casuali
function randomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

//crea dei numeri random da 0 a 100 per i punti fatti e i falli subiti per ogni squadra dell'array
for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = randomNumber(100);
  squadre[i].falli_subiti = randomNumber(100);
}

console.log(squadre);

//crea array vuota
const statSquadre = []
//ciclo for per pushare solo nomi e falli subiti nella array vuota appena creata
for (let i = 0; i < squadre.length; i++) {
    statSquadre.push({
nome: squadre[i].nome,
falli_subiti: squadre[i].falli_subiti
    })
    
}

//log della array nuova con solo nomi e falloi subiti
console.log(statSquadre);

