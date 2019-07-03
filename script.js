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

var nuovoCognome;

// console.log(cognomi[9]);

// Chiedo un nuovo Cognome all'utente
nuovoCognome = prompt('inserisci il prossimo acquisto magico della Juventus f.c');
console.log('Dato inserito da utente: ' + nuovoCognome);

//Inserisco input nell'Array
cognomi.push(nuovoCognome);
console.log(cognomi);
