function showAlert() {
    const alertPlaceholder = document.getElementById('alertPlaceholder')

    const alt = ` <div class="alert alert-success alert-dismissible fade show" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
        <use href="#check-circle-fill"></use>
      </svg>
      <strong>Success!</strong> You clicked on Kariawan link.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;

    alertPlaceholder.innerHTML = alertHTML;
}

// event linner kariawan
document.getElementById('kariawan').addEventListener('click', function(event) {
    event.preventDefault(); // agak link gk default
    showAlert(); // alert
})

