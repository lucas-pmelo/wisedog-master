const img = document.getElementById('img');
const text = document.getElementById('text');

function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            img.src = data.message
        })
}

function getRandomText() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            text.innerHTML = `"${data.slip.advice}"`
        })
}

getRandomDog();
getRandomText();