document.addEventListener("DOMContentLoaded", (event) => {
    /* Esercizio 1 */
    let firstNumberInput = document.getElementById('firstNumber');
    let secondNumberInput = document.getElementById('secondNumber');
    let operators = document.querySelectorAll('.operator');
    let resultElement = document.getElementById('result-bot');
    let resultCard = document.querySelector('.result-zone');
    /* Esercizio 2 */
    let textModifierButtons = document.querySelectorAll('.t-modifier');
    let userSentenceInput = document.getElementById('sentence');
    let modifiedSentenceElement = document.getElementById('result-text');
    let resultTextCard = document.querySelector('.result-zone-text-converter');
    /* Esercizio 3 */
    let numArrayInput = document.getElementById('number-array-input');
    let numberArrayGeneratorButton = document.getElementById('num-array-generate');
    let resultNumberArrayElement = document.getElementById('result-number-array');
    let resultNumberArrayCard = document.querySelector('.result-zone-number-array');
    /* Esercizio 4 */
    let contatoreTentativi = 1;
    let numberGuesserInput = document.getElementById('number-guesser-input');
    let numberGuesserGenerateButton = document.getElementById('num-guesser-generate');
    let newNumberGuesserGenerateButton = document.getElementById('new-num-guesser-generate');
    let resultNumberGuesserElement = document.getElementById('result-number-guesser');
    let resultNumberGuesserCard = document.querySelector('.result-zone-number-guesser');
    let numberCpuGenerated = Math.floor(Math.random() * 100) + 1;
    /* Esercizio 5 */
    let timerTotale = 1800000; //in millisecondi - 1800000 = 30 minuti
    let tempoRestante = 0;
    let timerInterval;
    let startTimerButton = document.getElementById('timer-pomodoro-start');
    let pauseTimerButton = document.getElementById('timer-pomodoro-pause');
    let resetTimerButton = document.getElementById('timer-pomodoro-reset');
    let timerDisplay = document.getElementById('timer-pomodoro-display');
    let timerCard = document.querySelector('.result-zone-timer-pomodoro');
    let inPausa = false;
    let inRiposo = false;

    /* Variabili e funzioni usate in più esercizi */
    const colorMap = {
        'sum': 'text-bg-primary',
        'sot': 'text-bg-secondary',
        'mul': 'text-bg-success',
        'divide': 'text-bg-danger',
        'upper': 'text-bg-primary',
        'lower': 'text-bg-secondary',
        'capitalize': 'text-bg-success',
        'reverse': 'text-bg-danger',
    };

    const bootstrapBgClasses = ['text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info', 'text-bg-light', 'text-bg-dark'];
    function setCardColor(elemento, nuovoColore) {
        elemento.classList.remove(...bootstrapBgClasses);
        elemento.classList.add(nuovoColore);
    }

    /* 
    * Esercizio 1 
    */
    operators.forEach((operator) => {
        operator.addEventListener('click', (event) => {
            const num1 = parseInt(firstNumberInput.value);
            const num2 = parseInt(secondNumberInput.value);
            let result;
            if (isNaN(num1) || isNaN(num2)) {
                result = "Inserisci numeri validi";
            } else {
                switch (event.currentTarget.id) {
                    case 'sum': result = num1 + num2; break;
                    case 'sot': result = num1 - num2; break;
                    case 'mul': result = num1 * num2; break;
                    case 'divide': if (num2 !== 0) { result = num1 / num2; break; } else { result = "Non posso dividere per 0"; break; }
                }
                const cardColor = colorMap[event.currentTarget.id];

                setCardColor(resultCard, cardColor);
            }
            resultElement.textContent = result;
        })
    });
    /* 
    * Fine esercizio 1 
    */

    /* 
    * Esercizio 2
    */

    function capitalizeWords(text) {
        return text
            .split(' ')
            .map((parola) => {
                const primaLettera = parola[0];
                const resto = parola.slice(1);
                return primaLettera.toUpperCase() + resto.toLowerCase();
            })
            .join(' ');
    }

    textModifierButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const textToModify = userSentenceInput.value.trim();
            let result;
            if (!textToModify) {
                result = "Inserisci una frase valida";
            } else {
                switch (event.currentTarget.id) {
                    case 'upper': result = textToModify.toUpperCase(); break;
                    case 'lower': result = textToModify.toLowerCase(); break;
                    case 'capitalize': result = capitalizeWords(textToModify); break;
                    case 'reverse': result = textToModify.split(' ').reverse().join(' '); break;
                }
                const cardColor = colorMap[event.currentTarget.id];

                setCardColor(resultTextCard, cardColor);
            }
            modifiedSentenceElement.textContent = result;
        })
    });

    /*
    * Fine esercizio 2
    */

    /*
    * Esercizio 3
    */
    numberArrayGeneratorButton.addEventListener('click', () => {
        const userInput = numArrayInput.value.trim();
        let sommaTotale = 0;
        let numeriCasuali = [];
        let numeriPari = [];
        let numeriDispari = [];
        let sommaPari = 0;
        let sommaDispari = 0;

        function resultNumPrinter() {
            setCardColor(resultNumberArrayCard, 'text-bg-success');
            numeriPari = numeriCasuali.filter(numero => numero % 2 === 0);
            numeriDispari = numeriCasuali.filter(numero => numero % 2 !== 0);
            sommaTotale = numeriCasuali.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            sommaPari = numeriPari.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            sommaDispari = numeriDispari.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            resultNumberArrayElement.innerHTML = "Questo è l'array: " + numeriCasuali + "<br> La somma è: " + sommaTotale + "<br> Questi sono i numeri pari: " + numeriPari + "<br> Questi sono i numeri dispari: " + numeriDispari + "<br> Somma numeri pari: " + sommaPari + "<br> Somma numeri dispari: " + sommaDispari;
        };

        if (userInput != '') {
            let numeriDiControllo = userInput.split(',').map(num => parseInt(num.trim(), 10));
            if (numeriDiControllo.every(numero => !isNaN(numero))) {
                if (numeriDiControllo.length === 20) {
                    numeriCasuali = numeriDiControllo;
                    resultNumPrinter();

                } else {
                    resultNumberArrayElement.innerHTML = "Inserisci esattamente 20 numeri separati da virgola <code>','</code>";

                    setCardColor(resultNumberArrayCard, 'text-bg-danger');
                    return;
                }
            } else {
                resultNumberArrayElement.innerHTML = "Inserisci solo numeri validi separati da virgola <code>','</code>";

                setCardColor(resultNumberArrayCard, 'text-bg-danger');
                return;
            }
        } else {
            numeriCasuali = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
            resultNumPrinter();

        }


    });

    /*
    * Fine esercizio 3
    */

    /*
    * Esercizio 4
    */

    numberGuesserGenerateButton.addEventListener('click', () => {
        const userNumberGuessed = parseInt(numberGuesserInput.value);
        if (isNaN(userNumberGuessed) || userNumberGuessed < 1 || userNumberGuessed > 100) {
            resultNumberGuesserElement.textContent = "Inserisci un numero valido";
            setCardColor(resultNumberGuesserCard, 'text-bg-danger');
            return;
        } else {
            if (userNumberGuessed === numberCpuGenerated) {
                resultNumberGuesserElement.textContent = "Hai indovinato! Tentativi: " + contatoreTentativi;
                setCardColor(resultNumberGuesserCard, 'text-bg-success');
                return;
            } else if (userNumberGuessed < numberCpuGenerated) {
                contatoreTentativi++;
                resultNumberGuesserElement.innerHTML = "Il numero è troppo basso. </br> Per ora hai effettuato " + contatoreTentativi + " tentativi";
                setCardColor(resultNumberGuesserCard, 'text-bg-primary');
                return;
            } else {
                contatoreTentativi++;
                resultNumberGuesserElement.innerHTML = "Il numero è troppo alto. </br> Per ora hai effettuato " + contatoreTentativi + " tentativi";
                setCardColor(resultNumberGuesserCard, 'text-bg-warning');
                return;
            }
        };

    });

    newNumberGuesserGenerateButton.addEventListener('click', () => {
        numberCpuGenerated = Math.floor(Math.random() * 100) + 1;
        contatoreTentativi = 1;
        numberGuesserInput.value = '';  // pulisce input
        resultNumberGuesserElement.textContent = '';  // pulisce messaggio
        setCardColor(resultNumberGuesserCard, 'text-bg-dark');  // resetta colore
        console.log(numberCpuGenerated);
    });

    /*
    * Fine esercizio 4
    */

    /*
    * Esercizio 5
    */

    function updateTimerDisplay() {
        const minuti = Math.floor(tempoRestante / 60000);
        const secondi = Math.floor((tempoRestante % 60000) / 1000);
        timerDisplay.textContent = `${minuti.toString().padStart(2, '0')}:${secondi.toString().padStart(2, '0')}`;
    }
    startTimerButton.addEventListener('click', () => {
        inPausa = false;
        if (tempoRestante === 0) {
            tempoRestante = timerTotale;
        }
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (tempoRestante <= 0) {
                clearInterval(timerInterval);
                timerDisplay.innerHTML = "00:00 <br> Tempo scaduto!";
                setCardColor(timerCard, 'text-bg-danger');
            } else if (tempoRestante <= 300000) { // in millisecondi - 300000 = 5 minuti
                if (inRiposo === false) {
                    setCardColor(timerCard, 'text-bg-success');
                    timerDisplay.innerHTML = timerDisplay.textContent + "<br> Prenditi una pausa!";
                    inRiposo = true;
                }
                tempoRestante -= 1000;
                updateTimerDisplay();

            } else {
                tempoRestante -= 1000;
                updateTimerDisplay();
            }
        }, 1000);
    });

    pauseTimerButton.addEventListener('click', () => {
        clearInterval(timerInterval);
        if (inPausa === false) {
            setCardColor(timerCard, 'text-bg-warning');
            inPausa = true;
        }
    });
    resetTimerButton.addEventListener('click', () => {
        clearInterval(timerInterval);
        tempoRestante = timerTotale;
        updateTimerDisplay();
        setCardColor(timerCard, 'text-bg-dark');
        inPausa = false;
        inRiposo = false;
    });

    updateTimerDisplay();

    /*
    * Fine esercizio 5
    */

    /*
    * Esercizio 6
    */
    const quoteArrayOriginal = [
        "Una nuova vita vi attende nella colonia Extra-Mondo. L'occasione per ricominciare in un Eldorado di buone occasioni e di avventure. (Voce del dirigibile)", "Non cercano killer nelle inserzioni sui giornali. Quella era la mia professione. Ex-poliziotto. Ex-cacciatore di replicanti. Ex-killer. (Rick Deckard)",
        "[Voce fuori campo] Il mio nome è Rick Deckard. Sono un Blade Runner. Un cacciatore di taglie specializzato nel ritirare replicanti fuggitivi. (Rick Deckard)", "[Voce fuori campo] Sushi. Così mi chiamava la mia ex-moglie. Pesce freddo. (Rick Deckard)",
        "[Voce fuori campo] Sushi. Così mi chiamava la mia ex-moglie. Pesce freddo. (Rick Deckard)",
        "[Voce fuori campo] Questo simpaticone si chiama Gaff. Bryant doveva averlo sollevato al rango dell'unità Blade Runner. I suoni inarticolati che emetteva erano la parlata cittadina, un guazzabuglio di giapponese, spagnolo, tedesco e chi più ne ha... A me non serviva un traduttore. Conoscevo quel gergo come ogni buon poliziotto. Ma non intendevo agevolare Gaff. (Rick Deckard)",
        "[Voce fuori campo] Lavori in pelle. Così Bryant chiamava i replicanti. Nei libri di storia è il tipo di poliziotto che chiama la gente di colore 'sporchi negri'. (Rick Deckard)",
        "[Voce fuori campo] Me ne ero andato perché avevo la nausea di uccidere. Ma ora preferivo essere un killer piuttosto che una vittima. Ed era precisamente questo che intendeva Bryant parlando di gente senza peso. Così accettai con la riserva mentale che se non avessi retto, me ne sarei svignata. Non avevo che preoccuparmi di Gaff. Andava leccando piedi a destra e a sinistra per una promozione, e non ci teneva che restassi. (Rick Deckard)",
        "[Voce fuori campo] Non sapevo se Leon aveva dato a Holden un indirizzo esistente, ma era l'unica traccia che avevo, perciò controllai. Qualunque cosa fosse quello che trovai in quella vasca non era umano. E i replicanti non hanno scaglie. Foto di famiglia... I replicanti non avevano certo famiglia. (Rick Deckard)",
        "Avvampando gli angeli caddero; profondo il tuono riempì le loro rive, bruciando con i roghi dell'orco. (Roy Batty)",
        "Fiery the angels fell, deep thunder rolled around their shores; burning with the fires of Orc. (Roy Batty)",
        "[Voce fuori campo] Tyrell aveva fatto un gran lavoro con Rachael.Perfino un'istantanea di una madre che non aveva mai avuto e di una figlia che non lo era mai stata. Non era previsto che i replicanti avessero sentimenti. Neanche i cacciatori di replicanti. Che diavolo mi stava succedendo? Le foto di Leon dovevano essere artefatte come quelle di Rachael. Non capivo perché un replicante collezionasse foto. Forse loro erano come Rachael: aveva bisogno di ricordi. (Rick Deckard)",
        "Io faccio amici.Giocattoli.I miei amici sono giocattoli.Li faccio io.È un hobby.Io sono un progettista genetico. (J.F.Sebastian)",
        "[Rivolto a Rachael] Sono stato scaricato da tante altre persone, ma non quando...Ero stato così amabile!(Rick Deckard)",
        "Signori e signore, Taffy Lewis presenta Miss Salomé e il serpente.Guardatela prendersi piacere dal serpente che un tempo corruppe l'uomo. (Annunciatore)",
        "Il rapporto: ordinaria amministrazione, ritiro[1] di un replicante.Ma non bastava comunque a confortarmi dall'aver sparato nella schiena a una donna. Ed ecco di nuovo un sentimento dentro di me. Per lei, per Rachael. (Rick Deckard)",
        "Io penso, Sebastian, pertanto sono. (Pris)",
        "[Rivolto a Deckard]Non è molto sportivo sparare su un avversario disarmato.Io pensavo che tu dovessi essere bravo.Non eri tu quello bravo ? [10] Vieni Deckard.Fammi vedere di cosa sei fatto. (Roy Batty)",
        "[Rivolto a Deckard]Bella esperienza vivere nel terrore, vero ? In questo consiste essere uno schiavo. (Roy Batty)",
        "[Ultime parole a Deckard]Io ne ho viste cose che voi umani non potreste immaginarvi.[11] Navi da combattimento in fiamme al largo dei bastioni di Orione...e ho visto i raggi B[12] balenare nel buio vicino alle porte di Tannhäuser.[13] E tutti quei momenti andranno perduti nel tempo come lacrime nella pioggia.È tempo di morire. (Roy Batty)",
        "I've seen things you people wouldn't believe.Attack ships on fire off the shoulder of Orion.I watched C - beams glitter in the dark near the Tannhauser gate.All those moments will be lost in time, like tears in rain.Time to die.",
        "[Voce fuori campo, parlando di Roy]Io non so perché mi salvò la vita.Forse in quegli ultimi momenti amava la vita più di quanto l'avesse mai amata... Non solo la sua vita: la vita di chiunque, la mia vita. Tutto ciò che volevano erano le stesse risposte che noi tutti vogliamo: 'Da dove vengo?' 'Dove vado?' 'Quanto mi resta ancora?' Non ho potuto far altro che restare lì e guardarlo morire. (Rick Deckard)"];

    const quoteButton = document.getElementById('quote-generator-start');
    const quoteDisplay = document.getElementById('quote-generator-display');
    const quoteCard = document.querySelector('.result-zone-quote');
    const quoteArray = [...quoteArrayOriginal];
    const cardColorArray = bootstrapBgClasses.length;
    let quoteLength = quoteArray.length;
    quoteButton.addEventListener('click', () => {
        quoteLength = quoteArray.length;
        if (quoteLength === 0) {
            quoteDisplay.innerHTML = "Citazioni finite, ricominciamo: </br>";
            quoteArray.push(...quoteArrayOriginal);
        } else {
            quoteSelector = Math.floor(Math.random() * quoteLength);
            let cardSelector = Math.floor(Math.random() * cardColorArray);
            quoteDisplay.textContent = quoteArray[quoteSelector];
            quoteArray.splice(quoteSelector, 1);
            setCardColor(quoteCard, bootstrapBgClasses[cardSelector]);
        }
    });

    /*
    * Fine esercizio 6
    */

});//DomContentLoaded