const numberBox = document.getElementById('number-box');
const tickButton = document.getElementById('tick-button');
const clear = document.getElementById('clear');
const go = document.getElementById('jump');

tickButton.addEventListener('click', () => {
    fetch("http://localhost:3000/tick")
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
        numberBox.value = data.number;
    });
});

clear.addEventListener('click', () => {
    
    const options = {
        method: 'DELETE',
    }
    fetch("http://localhost:3000/dleate", options)
    .then(checkForErrors)
    .then(response => response.json())
    .then(data => {
        numberBox.value = data.number;
    });
});

go.addEventListener('click', () => {
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({number: parseInt(numberBox.value)}),
    }
    fetch("http://localhost:3000/jump", options)
    .then(checkForErrors)
    .then( response => response.json())
    .then(data => {
        numberBox.value = data.number;
    });
});



function checkForErrors(response){
    if (!response.ok){
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}