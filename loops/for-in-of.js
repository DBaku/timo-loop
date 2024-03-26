// Array
const inventar = [
    { name: "Apfel", kategorie: "Obst", anzahl: 10 },
    { name: "Banane", kategorie: "Obst", anzahl: 20 },
    { name: "Birne", kategorie: "Obst", anzahl: 15 },
    { name: "Karotte", kategorie: "Gemüse", anzahl: 10 },
    { name: "Spinat", kategorie: "Gemüse", anzahl: 5 },
    { name: "Kartoffel", kategorie: "Gemüse", anzahl: 25 },
];

const productList = {};

// iterieren
for (const item of inventar) {
    // erstellen einer p-list
    if (!productList[item.kategorie]) {
        productList[item.kategorie] = [];
    }

    productList[item.kategorie].push(item.name);
}

// gesamtzahl
let totalCount = 0;

for (const item of inventar) {
    totalCount += item.anzahl;
}

console.log("Product list:", productList);
console.log("Total count:", totalCount);

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(numbers));
