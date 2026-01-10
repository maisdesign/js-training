document.addEventListener("DOMContentLoaded", (event) => {
    /*Esercizio 1 */
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

                resultCard.classList.remove('text-bg-dark', 'text-bg-success', 'text-bg-primary', 'text-bg-secondary', 'text-bg-danger');
                resultCard.classList.add(cardColor);
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
    /*Funzione MAP da richiamare successivamente*/
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
    /* Fine funzione MAP*/
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

                resultTextCard.classList.remove('text-bg-dark', 'text-bg-success', 'text-bg-primary', 'text-bg-secondary', 'text-bg-danger');
                resultTextCard.classList.add(cardColor);
            }
            modifiedSentenceElement.textContent = result;
        })
    });

    /*
    * Fine esercizio 2
    */

});