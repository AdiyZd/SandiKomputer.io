function hideSpinner(image) {
    const spinner = image.parentElement.querySelector('.spinner');
    spinner.style.display = 'none'; // Sembunyikan spinner
    image.classList.remove('d-none'); // Tampilkan gambar

    console.error(spinner + "adiganteng")
    console.log(spinner)
}


// ini animasi underline
const lk = document.querySelectorAll('#navbarNav li a');
const Target = document.getElementById('target');

lk.forEach((link) => {
    link.addEventListener('mouseenter', function() {
        const rect = this.getBoundingClientRect();
        Target.style.width = `${rect.width}px`;
        Target.style.left = `${rect.left}px`;
        Target.style.top = `${rect.top}px`;
    });
});

