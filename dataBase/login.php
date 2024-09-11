<?php
$host = '127.0.0.1';
$user = 'root';
$pw = '';
$data = 'sandi_komputer';

// koneksi 
$connection = new mysqli($host, $user, $pw, $data);

if ($connection->connect_error) {
    die("wrong koneksen : ".$connection -> connect_error);
}

// cek from sumbmit
if ($_SERVER['REQUEST_METHOD'] == 'post') {
    // data form login
    $username = $_POST['user'];
    $email = $_POST['email'];
    $password = $_POST['pass'];

    // validasi
    $stmt = $connection->prepare("SELECT * FROM users WHERE username = ? AND email = ? AND password = ?");
    $stmt->bind_param("sss", $user, $email, $password); // sss adalah semuanya str (setring)
    $stmt->execute();
    $hasil = $stmt->get_hasil();

    // ck user valid / tidak
    if ($hasil->num_rows > 0) {
        // berhasil
        echo "<script>
                alert('Berhasil login!');
                window.location.href = './index.html';  // Arahkan ke halaman dashboard
              </script>";
    } else {
        // gagal login / tidak valid
        echo "<script>
                alert('Username, email, atau password salah!');
                window.location.href = 'login.html';  // Kembali ke halaman login
              </script>";
    }
    //end
    $stmt->close();
}
$connection->close();
?>