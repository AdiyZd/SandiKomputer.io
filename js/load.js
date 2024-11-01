function hideSpinner(image) {
    const spinner = image.parentElement.querySelector('.spinner');
    spinner.style.display = 'none'; // Sembunyikan spinner
    image.classList.remove('d-none'); // Tampilkan gambar

    console.error(spinner + "adiganteng")
    console.log(spinner)
}