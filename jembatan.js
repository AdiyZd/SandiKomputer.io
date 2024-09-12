fetch('https://23de-36-71-85-37.ngrok-free.app/koneksi.php', {  // URL Ngrok
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
        user: 'admin',
        email: 'adiyzdbusinnes@gmail.com',
        pass: 'admin'
    })
})
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
