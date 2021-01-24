const menu = [
	{
		id:1, 
		title: "buttermilk pancakes", 
		category: "breakfast", 
		price: 15.99,
		img: "./images/item-1.jpeg", 
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt pharetra dictum. Etiam ac dui eget dui efficitur lacinia. Donec pellentesque, orci et laoreet aliquam, lacus velit interdum justo, nec varius leo neque eget nunc. ',
	},
	{
		id:2, 
		title: "diner double", 
		category: "lunch", 
		price: 13.99,
		img: "./images/item-2.jpeg", 
		desc: 'Aenean ut velit augue. Curabitur lobortis orci ac tortor blandit mattis. Nullam at sem eu magna consequat porttitor ac sed velit. Phasellus nec facilisis augue. Nulla tempus elit risus.',
	},
	{
		id:3, 
		title: "strawberry delight", 
		category: "shakes", 
		price: 8.00,
		img: "./images/item-3.jpeg", 
		desc: 'Phasellus sit amet mi enim. Cras posuere metus sit amet elit efficitur vulputate. Nulla facilisi. Fusce sed risus placerat, dictum libero at, vulputate leo. Maecenas dapibus quam vel tellus malesuada, maximus ultrices tortor facilisis. ',
	},
	{
		id:4, 
		title: "english breakfast", 
		category: "breakfast", 
		price: 10.00,
		img: "./images/item-4.jpeg", 
		desc: 'Duis sagittis sit amet tellus quis finibus. Donec ornare dictum bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas pharetra quam in urna tempor, in pharetra sem ultrices. ',
	},
	{
		id:5, 
		title: "double burger", 
		category: "lunch", 
		price: 14.50,
		img: "./images/item-5.jpeg", 
		desc: 'Curabitur mollis non purus eget lacinia. Morbi pretium, risus fringilla vehicula tempor, nisi diam pretium purus, in placerat libero augue ut ante. Etiam sed dapibus arcu. ',
	},
	{
		id:6, 
		title: "chockolate kiss", 
		category: "shakes", 
		price: 7.00,
		img: "./images/item-6.jpeg", 
		desc: 'Donec mollis tellus consectetur porttitor porta. Nunc pulvinar elementum dolor vel rutrum. Duis erat lectus, cursus non tincidunt sit amet, placerat ac purus.  ',
	},
	{
		id:7, 
		title: "egg-n'-ham", 
		category: "breakfast", 
		price: 13.70,
		img: "./images/item-7.jpeg", 
		desc: 'Suspendisse semper enim nec augue laoreet, sit amet convallis lectus porttitor. Vestibulum mauris metus, iaculis placerat tristique in, sodales nec elit. ',
	},
	{
		id:8, 
		title: "Cheeseburger", 
		category: "shakes", 
		price: 9.99,
		img: "./images/item-8.jpeg", 
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum sem lorem, ac accumsan nibh ultricies ut. Ut cursus lectus in tortor interdum, sed varius nulla varius.',
	},
	{
		id:9, 
		title: "shakes for two", 
		category: "shakes", 
		price: 13.00,
		img: "./images/item-9.jpeg", 
		desc: 'Nunc facilisis, ipsum non lacinia porta, quam nibh imperdiet felis, ut ornare ligula erat vitae nibh. Donec eget porta ante, non congue dui.',
	},
	{
		id:10, 
		title: "beef stew", 
		category: "dinner", 
		price: 35.00,
		img: "./images/item-10.jpeg", 
		desc: 'Integer laoreet rhoncus ante sit amet scelerisque. Praesent placerat justo vel tempus hendrerit. Vestibulum sed vestibulum metus.',
	},
	
	
	];
	
	// Odabir "roditelja" koji će se puniti podatcima djece - menu itemima
	const sectionCenter = document.querySelector ('.section-center');
	const container = document.querySelector('.btn-container');


	
	window.addEventListener('DOMContentLoaded', function() {
		displayMenuItems(menu)
		displayMenuButtons();
		
	});
	
	function displayMenuItems (menuItems) {
		let displayMenu = menuItems.map(function(item){
			
			//povlači podatke iz array-a
			return `<article class="menu-item">
			  <img src=${item.img} alt=${item.title} class="photo" />
			  <div class="item-info">
				<header>
				  <h4>${item.title}</h4>
				  <h4 class="price">$${item.price.toFixed(2)}</h4>
				</header>
				<p class="item-text">
				  ${item.desc}
				</p>
			  </div>
			</article>`;
		});
		// povlači sve html tagove za sve iteme
		displayMenu = displayMenu.join('');
		//dodaje povučene tagove parent container-u
		sectionCenter.innerHTML = displayMenu;
	}

	function displayMenuButtons () {
		const categories = menu.reduce(function(values,item) {
			if (!values.includes(item.category)) {
				values.push(item.category);
			}
			return values
			
		}, ['all']);
		const categoryBtns = categories.map(function(category){
			return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`
		}).join('');
		container.innerHTML = categoryBtns;
		const filterBtns = document.querySelectorAll ('.filter-btn');

	filterBtns.forEach(function(btn){
		btn.addEventListener('click', function(e){
			const category = e.currentTarget.dataset.id; 
			const menuCategory = menu.filter(function (menuItem){
				if (menuItem.category === category) {
					return menuItem;
				}
			});
			if (category === 'all') {
				displayMenuItems(menu);
			} else {
				displayMenuItems (menuCategory)
			}
			});
		});
	}