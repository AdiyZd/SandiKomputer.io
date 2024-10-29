// teg 
nomorAdmin = "6288216796297" // opsional
const tanya = "APAKAH BARANG MASIH ADA!"

// product 1
document.getElementById('buy1').addEventListener('click', function() {
    const advan = document.getElementById('model1').textContent;
    const sepek1 = document.getElementById("info1").innerHTML.replace(/<br>/g, '\n');
    const advanHarga = document.getElementById('hargaAdvan').textContent;

    const sendAdvan = `*Produk:* ${advan}\n*Spesifikasi:* \n${sepek1}\n*Harga:* ${advanHarga}\n*${tanya}*`;
    
    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendAdvan)}`, '_blank');
})

// product 2 
document.getElementById('buy2').addEventListener('click', function() {
    const lenovo = document.getElementById('model2').textContent;
    const spek2 = document.getElementById('info2').innerHTML.replace(/<br>/g, '\n');
    const lenovoHarga = document.getElementById('hargaLenovo').textContent;

    const sendLenovo = `*Produk:* ${lenovo}\n*Spesifikasi:* \n${spek2}\n*Harga:* ${lenovoHarga}\n*${tanya}*`;

    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendLenovo)}`, '_blank');
})

// product 3
document.getElementById('buy3').addEventListener('click', function() {
    const pcGaming = document.getElementById('3').textContent;
    const spek3 = document.getElementById('info3').innerHTML.replace(/<br>/g, '\n');
    const pc = document.getElementById('pc').textContent;

    const sendPc = `*Produk:* ${pcGaming}\n*Spesifikasi:* \n${spek3}\n*Harga:* ${pc}\n*${tanya}*`;

    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPc)}`, '_blank');
})

// product 4
document.getElementById('buy44').addEventListener('click', function() {
    const pproduk = document.getElementById('3').textContent;
    const spekPc2 = document.getElementById('info2').innerHTML.replace(/<br>/g, '\n')
    const hargapc1 = document.getElementById('pc1').textContent

    const sendPc = `*Produk:* ${pproduk}\n*Spesifikasi:* \n${spekPc2}\n*Harga: Rp.* ${hargapc1}\n*${tanya}*`;

    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPc)}`, '_blank');
})

// product 5
document.getElementById('buy5').addEventListener('click', function() {
    const acer = document.getElementById('acer').textContent;
    const info5 = document.getElementById('info5').innerHTML.replace(/<br>/g, '\n')
    const harga5 = document.getElementById('hargaAcer').textContent;

    const accer = `*Produk:* ${acer}\n*Spesifikasi:* \n${info5}\n*Harga:* ${harga5}\n*${tanya}*`;

    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(accer)}`, '_blink'); // api send whatsapp
})

// procuct 6

document.getElementById('buy6').addEventListener('click', function() {
    const product6 = document.getElementById('p6').textContent;
    const spekProduct6 = document.getElementById('s6').innerHTML.replace(/<br>/g, '\n')
    const hargaProduct6 = document.getElementById('h6').textContent;

    const zyrex = `*Produk:* ${product6}\n*Spesifikasi:* \n${spekProduct6}\n*Harga:* ${hargaProduct6}\n*${tanya}*`;

    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(zyrex)}`, '_blink') // api send whatsapp
})

// product 7
document.getElementById('buy7').addEventListener('click', function() {
    const product7 = document.getElementById('p7').textContent;
    const spekProduct7 = document.getElementById('s7').textContent;
    const hargaProduct7 = document.getElementById('h7').textContent;
    
    const apple = `*Produk:* ${product7}\n*Spesifikasi:* \n${spekProduct7}\n*Harga:* ${hargaProduct7}\n*${tanya}*`;

    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(apple)}`, '_blink') // api send whatsapp
})