const textarea = document.querySelector('#textarea');
const totalCharacters = document.querySelector('.total-counter');
const remainingCounter = document.querySelector('.remaining-counter');

function updateCounter(){
  totalCharacters.innerText = textarea.value.length;
  remainingCounter.innerText = textarea.getAttribute("maxLength") - textarea.value.length;
}
updateCounter()
textarea.addEventListener('keyup', ()=>{
  updateCounter()  
})