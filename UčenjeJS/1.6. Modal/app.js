// select modal-btn, modal-overlay, close-btn
// listen for click events on modal-btn and close-btn


const toggleBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');

toggleBtn.addEventListener('click', function () {
	
	modal.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
	modal.classList.remove('open-modal');
});