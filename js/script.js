document.addEventListener("DOMContentLoaded", (event) => {
    let firstNumberInput = document.getElementById('firstNumber');
    let secondNumberInput = document.getElementById('secondNumber');
    let operators = document.querySelectorAll('.operator');
    let resultElement = document.getElementById('result-bot');
    let resultCard = document.querySelector('.result-zone');
    const colorMap = {
        'sum': 'text-bg-primary',
        'sot': 'text-bg-secondary',
        'mul': 'text-bg-success',
        'divide': 'text-bg-danger'
    };

    operators.forEach((btn) => {
        btn.addEventListener('click', (event) => {
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

});