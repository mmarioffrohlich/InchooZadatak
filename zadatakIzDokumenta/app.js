const item = [
	{
		id:1, 
        title: "Sony RZX-24", 
        brand: "Sony",
        color: "Black",
        price: 15.99,
		img: "./images/image1.jpg", 
	},
	{
		id:2, 
        title: "Sbox 34i", 
        brand: "Sbox",
        color: "Black/Gray",
		price: 13.99,
		img: "./images/image2.jpg",
	},
	{
		id:3, 
		title: "SMX-z21", 
        brand: "SMX",
        color: "Black",
        price: 8.00,
		img: "./images/image3.jpg", 
	},
	{
		id:4, 
		title: "SoundMaster 21", 
        brand: "Sony",
        color: "Black/White",
        price: 10.00,
		img: "./images/image4.jpg", 
	},
	{
		id:5, 
		title: "LZX 33", 
        brand: "Sbox",
        color: "Black",
        price: 14.50,
		img: "./images/image5.jpg", 
	},
		
	];
	
	// Odabir "roditelja" koji će se puniti podatcima djece - menu itemima
	const sectionCenter = document.querySelector ('.section_center');
	const prevBtn = document.getElementsByClassName ('prev_btn');
	const nextBtn = document.getElementsByClassName ('next_btn');
	
	
	window.addEventListener('DOMContentLoaded', function() {
    if (item.length > 3 ) {
			let spl = item.splice(0,3);
           
            displayMenuItems(spl);
        } else {         
        displayMenuItems(item)
        
	}
			
	
	});
	
	function displayMenuItems (menuItems) {
        
		let displayMenu = menuItems.map(function(item){
           
			//povlači podatke iz array-a
            return `<article class="menu_item">
			  <img src=${item.img} alt=${item.title} class="photo" />
              <div class="item_info">
              <h4>${item.title}</h4>
              <div class="item_brand setup">Brand: <span class="txt">${item.brand}</span></div>
              <div class="item_color setup">Color: <span class="txt">${item.color}</span></div>
              <div class="item_price setup">Price: <span class="txt">${item.price.  toFixed(2)}$</span></div>
          
      </div>
      
  </article>
  <p class="bord"></p>
            </article>`;		
		
        });
       
		// povlači sve html tagove za sve iteme
		displayMenu = displayMenu.join('');
		//dodaje povučene tagove parent container-u
		sectionCenter.innerHTML = displayMenu;
	
	}


	nextBtn.addEventListener("click", function () {
	
	  });
	  // show prev person
	  prevBtn.addEventListener("click", function () {

	  });

	  function visible ()  {
		 let a = document.getElementById ("visibility");
		  if (a.style.visibility == "hidden") {
			a.style.visibility= "visible";
		  } else {
			a.style.visibility = "hidden";
		  }
	  }

	  