<?php
session_start();
session_unset(); // Hapus semua sesi
session_destroy(); // Hancurkan sesi

// Arahkan kembali ke halaman login atau halaman lain
header("Location: login.html");
exit();
?>
