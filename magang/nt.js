document.addEventListener("DOMContentLoaded", function() {
    var absenCard = document.getElementById('absen');
    var ijinCard = document.getElementById('ijin');
    var istirahat = document.getElementById('ist');
    var pulang = document.getElementById('plg');

    // Fungsi untuk mengirim pesan ke Telegram
    function sendTelegramMessage(message) {
        const botToken = '7198845365:AAFJt8ojZCQ5fuUNAEsZkwi60ieRosK9rgA';
        const chatId = '7355777672';

        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        const data = {
            chat_id: chatId,
            text: message
        };

        // Mengirimkan request POST ke Telegram API
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Pesan terkirim ke Telegram:', result);
        })
        .catch(error => {
            console.error('Error saat mengirim pesan ke Telegram:', error);
        });
    }

    // Absensi card dengan multiple inputs
    if (absenCard) {
        absenCard.addEventListener('click', async function(event) {
            event.preventDefault(); // Membatalkan default link

            // SweetAlert
            const { value: formValues } = await Swal.fire({
                title: "Masukkan Detail Absensi",
                html: `
                    <input id="swal-input1" class="swal2-input" placeholder="Nama">
                    <input id="swal-input2" class="swal2-input" placeholder="Waktu Absensi">
                `,
                focusConfirm: false,
                preConfirm: () => {
                    return [
                        document.getElementById("swal-input1").value,
                        document.getElementById("swal-input2").value
                    ];
                }
            });

            if (formValues) {
                // data(str)
                Swal.fire({
                    icon: "success",
                    title: `Absensi telah diproses!`,
                    text: `Nama: ${formValues[0]}, Waktu: ${formValues[1]}`,
                    showConfirmButton: false,
                    timer: 2000,
                    customClass: {
                        container: 'swal-center'
                    }
                });

                // Laporan admin
                const message = `Absensi:\nNama: ${formValues[0]}\nWaktu: ${formValues[1]}`;
                sendTelegramMessage(message);
            }
        });
    }

    // Ijin
    if (ijinCard) {
        ijinCard.addEventListener('click', async function(event) {
            event.preventDefault();

            // Ykin kan amal dan takwa user
            const { value: isHalfDay } = await Swal.fire({
                title: 'Apakah ada keperluan mendesak?',
                input: 'checkbox',
                inputValue: 0,
                inputPlaceholder: 'Ya, saya ada keperluan mendesak!',
                showCancelButton: true
            });

            if (isHalfDay === null) return;

            // Interaksi user
            const { value: text } = await Swal.fire({
                input: "textarea",
                inputLabel: "Alasan Izin",
                inputPlaceholder: "Tulis alasan izin di sini...",
                inputAttributes: {
                    "aria-label": "Tulis alasan izin di sini"
                },
                showCancelButton: true
            });

            if (text) {
                let message = text;
                if (isHalfDay) {
                    message += " (Setengah Hari)";
                }

                Swal.fire({
                    icon: 'success',
                    title: 'Izin Terkirim',
                    text: message
                });

                // Laporan admin
                sendTelegramMessage(message);
            }
        });
    }

    // Istirahat
    if (istirahat) {
        istirahat.addEventListener('click', function(event) {
            event.preventDefault();

            Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: true,
                timer: 3600000, // 1 jam
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    // nak wes 1 jam alaram muni
                    playAlarm();
                }
            }).fire({
                title: "Istirahat dimulai!",
                text: "Akan di beritahu setelah 1 jam"
            });

            // pesan telegram
            sendTelegramMessage("Istirahat dimulai. 1 jam dari sekarang!.");
        });
    }

    // bunyikan sound nya
    function playAlarm() {
        const alarmSound = new Audio('alaram.mpeg'); // sound!
        alarmSound.play();
        Swal.fire({
            title: "Waktu istirahat selesai",
            icon: "info",
            confirmButtonText: "OK"
        });
    }

    // bali
    if (pulang) {
        pulang.addEventListener('click', function(event) {
            event.preventDefault();

            const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });

            Toast.fire({
                icon: "success",
                title: "Terimakasih untuk waktunya hari ini"
            });

            // Kirim pesan ke Telegram
            sendTelegramMessage("Ijin pulang ya kak terimakasih!");
        });
    }
});
