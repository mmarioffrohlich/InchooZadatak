const questions = document.querySelectorAll ('.question'); 

questions.forEach (function(question){
	//koristi se qustion.query jer se taeko limitira opseg koji se pretražuje
	const btn = question.querySelector('.question-btn');
	btn.addEventListener('click', function () {
		// uspoređuje je li item jednak questionu te ako nije onda miče klasu show-text
		// micanjem klase tekst nestaje
		questions.forEach (function(item){
			if (item !== question) {
				item.classList.remove('show-text');
			}
		});
		
		
		
		
		question.classList.toggle('show-text');
		
	});
});


/* const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
	btn.addEventListener('click', function(e){
		// koriste se dva parentElement jer prvi dohvaća title, a drugi samo pitanje
		const question = e.currentTarget.parentElement.parentElement;
		question.classList.toggle('show-text');
	})
}) */