// Toggle class active//
// const header = document.querySelector('.header');
const menu = document.querySelector('#hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav1');

//ketika hamburger menu di klik //
document.querySelector('#hamburger-menu').onclick = () => {
	navbarNav.classList.toggle('active');
};

//klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
	if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
		navbarNav.classList.remove('active');
	}
});

//rotate hamburger menu



menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbarNav.classList.toggle('active');
};


function showElement() {
  var element = document.getElementById(".card-dsn");
  element.style.display = "flex";
}




// window.onscroll = () =>{
// 	menu.classList.remove('fa-times');
// 	navbarNav.classList.remove('active');

// 	if(window.scrollY > 0){
// 		header.classList.add('active');
// 	}else{
// 		header.classList.remove('active');
// 	}
// };

