//chiedi all'utente un Cognome
// Inseriscilo in un Array con altri Cognomi
// Stampa l'elenco aggiornato ed in ordine alfabetico
// Scrivere l aposizione nella lista del nuovo utente inserito

// Valorizzo un Array con Gia dei Cognomi
var cognomi = [
  "Buffon",
  "barzagli",
  "Chiellini",
  "Bonucci",
  "Alex sandro",
  "pjanic",
  "Matuidi",
  "bernardeschi",
  "Mandzuckic",
  "Ronaldo",
  "Dybala"
];

var nuovoCognome, contatore, lengthArray, listaHtml, contenutoTemp;

// Chiedo un nuovo Cognome all'utente
nuovoCognome = prompt('inserisci il prossimo acquisto magico della Juventus f.c');
console.log('Dato inserito da utente: ' + nuovoCognome);

//Inserisco input nell'Array
cognomi.push(nuovoCognome);

// Stampo lunghezza Array dei Cognomi
lengthArray = cognomi.length;
console.log("Lunghezza dell'Array: " + lengthArray);

// Creo un Ciclo per trasformare tutti gli elementi dell'Array in maiuscolo per evitare problemi nella messa in ordine Alfabetico
for (var i = 0; i < lengthArray; i++){
  cognomi[i] = cognomi[i].toUpperCase();
}

// Metto in oridine Alfabetico il mio Array;
cognomi.sort();

//Chiudo il contatore in una variabile
contatore = 0;
listaHtml = document.getElementById('lista');

// Stampo la nuova lista aggiornata
while (contatore < lengthArray) {

  //prova per controllo e stampa dell'indice dell'elemento inserito da prompt()
  if(cognomi[contatore] == nuovoCognome) {
    console.log([contatore] + ' ' + cognomi[contatore]);
  }
  contenutoTemp = listaHtml.innerHTML;

  listaHtml.innerHTML = contenutoTemp + "<li>" + cognomi[contatore] + "</li>";
  contatore++;
}


// Controllo per stampare l'indice dell'elemento input all'interno della lista
// for(var i = 0; i < cognomi.length; i++) {
//    if(cognomi[contatore] === nuovoCognome) {
//      console.log(i);
//    }
// }
// console.log(i);

// var index = nuovoCognome.findIndex();
//
// console.log(index);
