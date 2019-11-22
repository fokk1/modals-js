let openBtns = document.querySelectorAll('.modal__open');
let closeBtns = document.querySelectorAll('.modal__close');
let body = document.body;

function openModal(openBtn) {
	openBtn.onclick = (event) => {
		event.preventDefault();
		
		let open = openBtn.getAttribute('data-open');
		let modal = document.getElementById(open);
		
		modal.classList.add('active');
		body.classList.add('no-scroll');
		
		setTimeout(() => {
			modal.querySelector('.modal__dialog').style.transform = "rotateX(0)";
		}, 200);
	}
};

openBtns.forEach((i) => {
	openModal(i);
})

function closeModal(closeBtn) {
	closeBtn.onclick = (event) => {
		event.preventDefault();
		
		let close = closeBtn.getAttribute('data-close');
		let modal = document.getElementById(close);
		
		modal.querySelector('.modal__dialog').style.transform = "rotateX(90deg)";
		
		setTimeout(() => {
				modal.classList.remove('active');
				body.classList.remove('no-scroll');
			}, 200);
	}
};

closeBtns.forEach((i) => {
	closeModal(i);
})

window.addEventListener('click', function(event) {
	let modals = document.querySelectorAll('.modal');
	
	for (let modal of modals) {
		if (event.target == modal) {
			modal.querySelector('.modal__dialog').style.transform = "rotateX(90deg)";
			
			setTimeout(() => {
				modal.classList.remove('active');
				body.classList.remove('no-scroll');
			}, 200);
		}
	}
});