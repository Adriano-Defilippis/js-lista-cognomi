//chiedi all'utente un Cognome
// Inseriscilo in un Array con altri Cognomi
// Stampa l'elenco aggiornato ed in ordine alfabetico
// Scrivere l aposizione nella lista del nuovo utente inserito

// Valorizzo un Array con Gia dei Cognomi
var cognomi = [
  "Buffon",
  "Barzagli",
  "Chiellini",
  "Bonucci",
  "Alex sandro",
  "Pjanic",
  "Matuidi",
  "Bernardeschi",
  "Mandzuckic",
  "Ronaldo",
  "Dybala"
];

var nuovoCognome, contatore, lengthArray;

// Chiedo un nuovo Cognome all'utente
nuovoCognome = prompt('inserisci il prossimo acquisto magico della Juventus f.c');
console.log('Dato inserito da utente: ' + nuovoCognome);

//Inserisco input nell'Array
cognomi.push(nuovoCognome);
console.log(cognomi);

// Stampo l'elenco dei Cognomi
lengthArray = cognomi.length;
console.log(lengthArray);

//Chiudo il contatore in una variabile
contatore = 0;

// Stampo in console la nuova lista aggiornata
while (contatore < lengthArray) {
  console.log([contatore] + " " + cognomi[contatore]);

  contatore++;
}
