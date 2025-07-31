

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

const listOfPersons = [
    {name: "Jennifer", age: 20},
    {name: "Leo", age: 32},
    {name: "Tor", age: 2},
    {name: "Annika", age: 50},
    {name: "Lukas", age: 40},
]

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
function printNamesOver30(listOfPersons) {
    listOfPersons.forEach (listOfPersons => {
    if (listOfPersons.age > 30) {
        console.log(listOfPersons.name);
    }
    });

}
// anropa funktionen och skicka med arrayen som argument
printNamesOver30(listOfPersons);
}

uppg8();

module.exports = { uppg8 };