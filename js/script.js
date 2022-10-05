/* ! Chiedo all'utente il suo nome */
const nomeUtente = prompt('Qual è il tuo nome?');
/* ! Chiedo all'utente il suo cognome */
const cognomeUtente = prompt('Qual è il tuo cognome?');
/* ! Chiedo all'utente il suo colore preferito */
const colorePreferito = prompt('Qual è il tuo colore preferito?');
/* ! Chiedo all'utente la sua età */
let etaUtente = prompt('Quanti anni hai?');
/* ! inserire solo numeri interi */
etaUtente = parseInt(etaUtente);

/* ! constante password per stampare a schermo il risultato */
const password = `
<h1 class="display-2 fw-bold pb-4">Password generata automaticamente con i tuoi dati:</h1>
<span class="black fs-1 fw-bold">${nomeUtente}${cognomeUtente}${colorePreferito}${etaUtente}</span>
`;

const elemento = document.getElementById('wannabe');

elemento.innerHTML = password;