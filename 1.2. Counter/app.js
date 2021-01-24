// set initial count (value)
let count = 0; 

// select value and buttons

const value = document.querySelector ("#value");
const btns = document.querySelectorAll (".btn");

// odabir svih stavki koje imaju istu klasu
btns.forEach(function (btn) {
	btn.addEventListener('click', function (e) {
		const styles = e.currentTarget.classList;
		//ako pojedini button sadrži specifični stile zna se da se radi 
		// o odabranom buttonu
		if (styles.contains("decrease")) {
			count --;
		} 
		else if (styles.contains("increase")) {
			count ++;
		}
		else {
			count = 0;
		}
		//mijenjanje boje spana ovisno o vrijednosti count-a
		if (count > 0) {
			value.style.color = 'green';
		}
		if (count < 0) {
			value.style.color = 'red'; 
		}
		if (count === 0){
			value.style.color = '#222';
		}
		value.textContent = count; 
	});
});