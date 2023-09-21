const navBtn = document.getElementById('loginNavBtn')
const modal = document.getElementById('loginModal')
const closeModal = document.getElementById('closeModal');
const modalBackdrop = document.getElementById('modalBackdrop');

// Función para abrir el modal
navBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalBackdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Función para cerrar el modal haciendo clic en la "X"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Función para cerrar el modal haciendo clic en el fondo sombreado
modalBackdrop.addEventListener('click', () => {
    modal.style.display = 'none';
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = 'auto';
});
