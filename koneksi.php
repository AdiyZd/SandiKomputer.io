<?php

session_start();

$host = '127.0.0.1';
$user = 'root';
$pw = '';
$data = 'sandi_komputer';

// Koneksi ke database
$connection = new mysqli($host, $user, $pw, $data);

if ($connection->connect_error) {
    die("Koneksi gagal: " . $connection->connect_error);
}

// interaksi user html form POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Validasi keberadaan kunci
    if (isset($_POST['user'], $_POST['email'], $_POST['pass'])) {
        $nama = $_POST['user'];
        $email = $_POST['email'];
        $password = $_POST['pass'];

        // luru query data seko mysql
        $stmt = $connection->prepare("SELECT * FROM tb_admin WHERE nama = ? AND email = ? AND password = ?");
        
        if ($stmt === false) {
            die("Error preparing statement: " . $connection->error);
        }

        // Bind parameter
        $stmt->bind_param("sss", $nama, $email, $password);

        // Eksekusi statement
        $stmt->execute();

        // Dapatkan hasil
        $hasil = $stmt->get_result();

        // Cek apakah user valid atau tidak
        if ($hasil->num_rows > 0) {
            // Set cookie untuk status login
            setcookie("loggedin", "true", time() + 3600, "/");
            
            echo "<script>
                    alert('Berhasil login!');
                    window.location.href = 'index.html';  // Arahkan ke halaman dashboard
                  </script>";
        } else {
            echo "<script>
                    alert('Username, email, atau password salah!');
                    window.location.href = 'login.html';  // Kembali ke halaman login
                  </script>";
        }

        // Tutup statement
        $stmt->close();
    } else {
        die("Data form tidak lengkap.");
    }
}

// Tutup koneksi
$connection->close();
?>
