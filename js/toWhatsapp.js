// teg 
nomorAdmin = "6288216796297" // opsional
const tanya = "APAKAH BARANG MASIH ADA!"

document.getElementById('buy1').addEventListener('click', function() {
    const advan = document.getElementById('model1').textContent;
    const sepek1 = document.getElementById("info1").innerHTML.replace(/<br>/g, '\n');
    const advanHarga = document.getElementById('hargaAdvan').textContent;
    
    const sendAdvan = `*Produk:* ${advan}\n*Spesifikasi:* \n${sepek1}\n*Harga:* ${advanHarga}\n*${tanya}*`;
    
    window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendAdvan)}`, '_blank');
})