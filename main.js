const text = document.querySelector('#main-text');
const charCount = document.querySelector('#char-length');

let charLength = 0;

charCount.textContent = charLength;

text.addEventListener('input', function(e) {
    console.log(e.target.value);
    console.log(e.target.value.length);
    charLength = e.target.value.length;

    charCount.textContent = charLength;
});

window.open('https://source.unsplash.com/random', 'popUpWindow', 'width=400, height=300, left=200, top=100');