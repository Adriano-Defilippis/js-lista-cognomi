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

var nuovoCognome, contatore, lengthArray, listaHtml;

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
console.log(cognomi.sort());

//Chiudo il contatore in una variabile
contatore = 0;
listaHtml = document.getElementById('lista');

// Stampo in console la nuova lista aggiornata
while (contatore < lengthArray) {

  console.log([contatore] + " " + cognomi[contatore]);
  contatore++;
}
