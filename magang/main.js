// Jika menggunakan modul ES6, pastikan browser mendukung atau gunakan <script> tag
// import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.all.min.js';

// Fungsi untuk mendapatkan nilai cookie
function getCookie(name) {
    let cookieName = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// Fungsi untuk menghandle klik kartu
async function handleCardClick(event) {
    // Ambil elemen yang diklik
    let card = event.currentTarget;
    // Periksa apakah pengguna sudah login
    var isLoggedIn = getCookie('loggedin') === 'true';

    if (isLoggedIn) {
        let cardText = card.querySelector('.card-text').textContent;

        // Gunakan SweetAlert2 untuk menampilkan alert dengan input tanggal dan waktu
        const { value: dateTime } = await Swal.fire({
            title: "Pilih Tanggal dan Waktu",
            input: "datetime-local",
            inputAttributes: {
                min: new Date().toISOString().slice(0, -8) // Set default value to current date and time
            },
            inputPlaceholder: "Pilih tanggal dan waktu",
            showCancelButton: true,
            cancelButtonText: 'Batal'
        });

        if (dateTime) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Terima kasih, ${cardText} telah diproses!`,
                text: `Tanggal dan waktu: ${dateTime}`,
                showConfirmButton: false,
                timer: 1500
            });

            // Kirim pesan ke Telegram
            sendTelegramMessage(`Pengguna telah melakukan aksi: ${cardText}. Tanggal dan waktu: ${dateTime}`);
        }
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Perhatian',
            text: 'Anda harus login terlebih dahulu.',
            confirmButtonText: 'OK'
        });
    }
}

// Menambahkan event listener pada kartu setelah DOM dimuat
document.addEventListener("DOMContentLoaded", function() {
    // Pilih semua kartu
    var cards = document.querySelectorAll('.card');

    // Tambahkan event listener pada kartu jika sudah login
    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
});
