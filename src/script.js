const openModalButons = document.querySelectorAll('[data-modal-target]');
const closeButtons = document.querySelectorAll('[data-close-button]');

openModalButons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
})

closeButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        const modal = button.closest('.window');
        closeModal(modal)
    })
})

function openModal(modal){
    if(modal == null) return;
    modal.classList.add('active')
}

function closeModal(modal){
    if(modal == null) return;
    modal.classList.remove('active')
}


const burger = document.querySelector(".burger");
const hamburger = document.querySelector(".hamburger")

burger.addEventListener('click', () => {
    burger.classList.toggle('animated');
    if(hamburger.style.display === 'none'){
        hamburger.style.display = 'block';
    } else {
        hamburger.style.display = 'none'
    }

})
