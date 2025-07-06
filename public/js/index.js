console.log("index.js loaded!"); // Add this line

const compose = document.getElementById('composeBtn');

if (compose) {
    console.log("Button found!"); // Add this line
    compose.addEventListener('click', ()=>{
        console.log("Button clicked!"); // Add this line
        window.location.href = '/compose'
    });
} else {
    console.error("Button with ID 'composeBtn' not found!"); // Add this line
}