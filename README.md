# JS Training - Esercizi JavaScript

Repository di esercizi per praticare JavaScript, manipolazione del DOM ed eventi.

## 📋 Lista Esercizi

### Esercizio 1: Calcolatrice Base ✅
Crea una pagina che permetta di inserire due numeri all'utente e, tramite dei pulsanti dedicati, calcolare e mostrare nella pagina: la somma, la differenza, la moltiplicazione e la divisione. 

**Requisiti:**
- Due input per i numeri
- Quattro pulsanti per le operazioni (+, -, *, /)
- Ogni operazione deve essere eseguita solo quando l'utente clicca sul relativo pulsante
- Entrambi i numeri devono essere stati inseriti
- Gestire la divisione per zero

**Competenze:** `getElementById`, `addEventListener`, validazione input, operatori matematici

---

### Esercizio 2: Convertitore di Testo
Crea un convertitore di testo: l'utente inserisce una frase e può trasformarla in MAIUSCOLO, minuscolo, Iniziali Maiuscole, o invertire l'ordine delle parole.

**Requisiti:**
- Input per la frase
- Quattro pulsanti per le trasformazioni
- Mostrare il risultato nella pagina

**Competenze:** `toUpperCase()`, `toLowerCase()`, manipolazione stringhe, `split()`, `reverse()`, `join()`

---

### Esercizio 3: Filtro Numeri Pari e Dispari
Scrivi una funzione che prenda in ingresso un array di 20 numeri e crei due nuovi array: uno con i numeri pari, uno con i dispari. Mostra entrambi gli array e le loro somme.

**Requisiti:**
- Generare o definire un array di 20 numeri
- Filtrare numeri pari e dispari
- Calcolare la somma di ciascun array
- Mostrare i risultati nella pagina

**Competenze:** array, `filter()`, `reduce()`, operatore modulo `%`, cicli

---

### Esercizio 4: Gioco "Indovina il Numero"
Realizza un gioco "Indovina il numero": il computer sceglie un numero tra 1 e 100. L'utente fa tentativi e riceve feedback "troppo alto", "troppo basso" o "corretto!". Conta i tentativi necessari.

**Requisiti:**
- Generare numero casuale tra 1 e 100
- Input per i tentativi dell'utente
- Dare feedback dopo ogni tentativo
- Contare il numero di tentativi
- Permettere di iniziare una nuova partita

**Competenze:** `Math.random()`, condizioni `if/else`, variabili di stato, logica di gioco

---

### Esercizio 5: Timer Pomodoro
Crea un timer pomodoro: 25 minuti di lavoro, 5 di pausa. Bottoni per start, pausa, reset.

**Requisiti:**
- Timer di 25 minuti per la sessione di lavoro
- Timer di 5 minuti per la pausa
- Pulsanti: Start, Pausa, Reset
- Mostrare il tempo rimanente
- Alternare automaticamente tra lavoro e pausa

**Competenze:** `setInterval()`, `clearInterval()`, gestione del tempo, stati dell'applicazione

---

### Esercizio 6: Generatore di Citazioni Casuali
Realizza una pagina con un pulsante che ad ogni click mostra una frase casuale presa da un array di citazioni.

**Requisiti:**
- Array con almeno 10 citazioni
- Pulsante per generare citazione casuale
- Mostrare la citazione nella pagina con formattazione
- Evitare di mostrare la stessa citazione due volte consecutive (bonus)

**Competenze:** array, `Math.random()`, selezione casuale, manipolazione DOM

---

## 🚀 Come Iniziare

1. Clona questa repository
2. Apri `index.html` nel browser
3. Modifica `js/script.js` per completare gli esercizi
4. Aggiorna l'HTML secondo le necessità di ogni esercizio

## 📁 Struttura del Progetto

```
js-training/
├── index.html          # Pagina principale
├── js/
│   └── script.js      # File JavaScript
├── css/
│   └── style.css      # Stili personalizzati (opzionale)
└── README.md          # Questo file
```

## 💡 Suggerimenti

- Completa gli esercizi in ordine di difficoltà
- Usa la console del browser (F12) per il debugging
- Testa tutti i casi limite (input vuoti, valori negativi, ecc.)
- Commenta il tuo codice per spiegare la logica
- Cerca di scrivere codice pulito e riutilizzabile

## 🛠️ Tecnologie Utilizzate

- HTML5
- CSS3 / Bootstrap 5
- JavaScript (Vanilla)

---

**Buon coding! 🎯**
