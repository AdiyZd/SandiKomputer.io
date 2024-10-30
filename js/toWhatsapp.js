// teg 
nomorAdmin = "6288216796297" // opsional
const tanya = "APAKAH BARANG MASIH ADA!" // opsional 
const error = "code js mengalami kerusakan! Harap periksa code js atau lapor web aps" // generator error

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
document.getElementById('buy7').addEventListener('click', function(){
    const data7 = document.getElementById('p7').textContent || 'Nama tidak tersedia';
    const Sdata7 = document.getElementById('s7').innerHTML.replace(/<br>/g, '\n') || 'Spesifikasi null';
    const Hdata7 = document.getElementById('h7').textContent || "harga null";

    if(data7 && Sdata7 && Hdata7) {
        console.log(nomorAdmin);
        console.log(tanya);

        const apple = `*Produk:* ${data7}\n*Spesifikasi:* \n${Sdata7}\n*Harga:* ${Hdata7}\n*${tanya}*`;

        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(apple)}`, '_blink') // api send whatsapp
    } else {
        console.error('Element id tidak diketahui!');
    }
});    

// product 8
document.getElementById('buy8').addEventListener('click', function(){
    const data8 = document.getElementById('p8').textContent || "Pesanan tidak di temukan";
    const Sdata8 = document.getElementById('s8').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak di temukan";
    const Hdata8 = document.getElementById("h8").textContent || "Pesanan tidak di temukan";

    if (data8 && Sdata8 && Hdata8) {
        const SendProduct8 = `*Produk:* ${data8}\n*Spesifikasi:* \n${Sdata8}\n*Harga:* ${Hdata8}\n*${tanya}*`;
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(SendProduct8)}`, '_blink') // api
    } else {
        alert("Code Js tidak memproses pesanan dengan benar")
    };
});

// product 9
document.getElementById('buy9').addEventListener('click', function() {
    const data9 = document.getElementById('p9').textContent || "pesanan tidak ditemukan";
    const sdata9 = document.getElementById('s9').innerHTML.replace(/<br>/g, '\n') || "pesanan tidak ditemukan";
    const Hdata9 = document.getElementById('h9').textContent || "pesanan tidak ditemukan"; 

    if (data9 && sdata9 && Hdata9) {
        const SendProduct9 = `*Produk:* ${data9}\n*Spesifikasi:* \n${sdata9}\n*Harga:* ${Hdata9}\n*${tanya}*`
    
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(SendProduct9)}`, '_blink')
    } else {
        alert("code js mengalami kerusakan! Harap periksa code js atau lapor web aps")
    };
})

// product 10 
document.getElementById('buy10').addEventListener('click', function(){
    const data10 = document.getElementById('p10').textContent || "Pesana tidak ditemukan";
    const Sdata10 = document.getElementById('s10').innerHTML.replace(/<br>/g, '\n') || "Pesana tidak ditemukan";
    const Hdata10 = document.getElementById('h10').textContent || "pesanan tidak ditemukan";

    if (data10 && Sdata10 && Hdata10) {
        const DataProduct10 = `*Produk:* ${data10}\n*Spesifikasi:* \n${Sdata10}\n*Harga:* ${Hdata10}\n*${tanya}*`;
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(DataProduct10)}`, '_blink')
    } else {
        alert(error)
    };
});

// product 11
document.getElementById('buy11').addEventListener('click', function() {
    const data11 = document.getElementById('p11').textContent || "pesanan tidak ditemukan";
    const Sdata11 = document.getElementById('s11').innerHTML.replace(/<br>/g, '\n') || "Pesana tidak ditemukan";
    const Hdata11 = document.getElementById('h11').textContent || "Pesanan tidak ditemukan";

    if (data11 && Sdata11 && Hdata11) {
        const SenedDataProduct11 =  `*Produk:* ${data11}\n*Spesifikasi:* \n${Sdata11}\n*Harga:* ${Hdata11}\n*${tanya}*`;
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(SenedDataProduct11)}`, '_blink')
    } else {
        alert(error) // ambil data error
    };
});

// product 12
document.getElementById('buy12').addEventListener('click', function() {
    const data12 = document.getElementById('p12').textContent || "Pesanan tidak di temukan";
    const Sdaat12 = document.getElementById('s12').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata12 = document.getElementById('h12').textContent || "Pesanan tidak ditemukan"

    if (data12 && Sdaat12 && Hdata12) {
        const sendPriductData12 = `*Produk:* ${data12}\n*Spesifikasi:* \n${Sdaat12}\n*Harga:* ${Hdata12}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData12)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
});

// product 13
document.getElementById('buy13').addEventListener('click', function() {
    const data13 = document.getElementById('p13').textContent || "Pesanan tidak di temukan";
    const Sdaat13 = document.getElementById('s13').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata13 = document.getElementById('h13').textContent || "Pesanan tidak ditemukan"

    if (data13 && Sdaat13 && Hdata13) {
        const sendPriductData13 = `*Produk:* ${data13}\n*Spesifikasi:* \n${Sdaat13}\n*Harga:* ${Hdata13}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData13)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
});

// product 14
document.getElementById('buy14').addEventListener('click', function() {
    const data14 = document.getElementById('p14').textContent || "Pesanan tidak di temukan";
    const Sdaat14 = document.getElementById('s14').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata14 = document.getElementById('h14').textContent || "Pesanan tidak ditemukan"

    if (data14 && Sdaat14 && Hdata14) {
        const sendPriductData14 = `*Produk:* ${data14}\n*Spesifikasi:* \n${Sdaat14}\n*Harga:* ${Hdata14}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData14)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
});

// product 15
document.getElementById('buy15').addEventListener('click', function() {
    const data15 = document.getElementById('p15').textContent || "Pesanan tidak di temukan";
    const Sdaat15 = document.getElementById('s15').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata15 = document.getElementById('h15').textContent || "Pesanan tidak ditemukan"

    if (data15 && Sdaat15 && Hdata15) {
        const sendPriductData15 = `*Produk:* ${data15}\n*Spesifikasi:* \n${Sdaat15}\n*Harga:* ${Hdata15}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData15)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 16
document.getElementById('buy16').addEventListener('click', function() {
    const data16 = document.getElementById('p16').textContent || "Pesanan tidak di temukan";
    const Sdaat16 = document.getElementById('s16').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata16 = document.getElementById('h16').textContent || "Pesanan tidak ditemukan"

    if (data16 && Sdaat16 && Hdata16) {
        const sendPriductData16 = `*Produk:* ${data16}\n*Spesifikasi:* \n${Sdaat16}\n*Harga:* ${Hdata16}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData16)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 17
document.getElementById('buy17').addEventListener('click', function() {
    const data17 = document.getElementById('p17').textContent || "Pesanan tidak di temukan";
    const Sdaat17 = document.getElementById('s17').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata17 = document.getElementById('h17').textContent || "Pesanan tidak ditemukan"

    if (data17 && Sdaat17 && Hdata17) {
        const sendPriductData17 = `*Produk:* ${data17}\n*Spesifikasi:* \n${Sdaat17}\n*Harga:* ${Hdata17}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData17)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 18
document.getElementById('buy18').addEventListener('click', function() {
    const data18 = document.getElementById('p18').textContent || "Pesanan tidak di temukan";
    const Sdaat18 = document.getElementById('s18').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata18 = document.getElementById('h18').textContent || "Pesanan tidak ditemukan"

    if (data18 && Sdaat18 && Hdata18) {
        const sendPriductData18 = `*Produk:* ${data18}\n*Spesifikasi:* \n${Sdaat18}\n*Harga:* ${Hdata18}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData18)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 19
document.getElementById('buy19').addEventListener('click', function() {
    const data19 = document.getElementById('p19').textContent || "Pesanan tidak di temukan";
    const Sdaat19 = document.getElementById('s19').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata19 = document.getElementById('h19').textContent || "Pesanan tidak ditemukan"

    if (data19 && Sdaat19 && Hdata19) {
        const sendPriductData19 = `*Produk:* ${data19}\n*Spesifikasi:* \n${Sdaat19}\n*Harga:* ${Hdata19}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData19)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 20
document.getElementById('buy20').addEventListener('click', function() {
    const data20 = document.getElementById('p20').textContent || "Pesanan tidak di temukan";
    const Sdaat20 = document.getElementById('s20').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata20 = document.getElementById('h20').textContent || "Pesanan tidak ditemukan"

    if (data20 && Sdaat20 && Hdata20) {
        const sendPriductData20 = `*Produk:* ${data20}\n*Spesifikasi:* \n${Sdaat20}\n*Harga:* ${Hdata20}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData20)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 21
document.getElementById('buy21').addEventListener('click', function() {
    const data21 = document.getElementById('p21').textContent || "Pesanan tidak di temukan";
    const Sdaat21 = document.getElementById('s21').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata21 = document.getElementById('h21').textContent || "Pesanan tidak ditemukan"

    if (data21 && Sdaat21 && Hdata21) {
        const sendPriductData21 = `*Produk:* ${data21}\n*Spesifikasi:* \n${Sdaat21}\n*Harga:* ${Hdata21}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData21)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 22
document.getElementById('buy22').addEventListener('click', function() {
    const data22 = document.getElementById('p22').textContent || "Pesanan tidak di temukan";
    const Sdaat22 = document.getElementById('s22').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata22 = document.getElementById('h22').textContent || "Pesanan tidak ditemukan"

    if (data22 && Sdaat22 && Hdata22) {
        const sendPriductData22 = `*Produk:* ${data22}\n*Spesifikasi:* \n${Sdaat22}\n*Harga:* ${Hdata22}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData22)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 23
document.getElementById('buy23').addEventListener('click', function() {
    const data23 = document.getElementById('p23').textContent || "Pesanan tidak di temukan";
    const Sdaat23 = document.getElementById('s23').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata23 = document.getElementById('h23').textContent || "Pesanan tidak ditemukan"

    if (data23 && Sdaat23 && Hdata23) {
        const sendPriductData23 = `*Produk:* ${data23}\n*Spesifikasi:* \n${Sdaat23}\n*Harga:* ${Hdata23}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData23)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// product 24
document.getElementById('buy24').addEventListener('click', function() {
    const data24 = document.getElementById('p24').textContent || "Pesanan tidak di temukan";
    const Sdaat24 = document.getElementById('s24').innerHTML.replace(/<br>/g, '\n') || "Pesanan tidak temukan";
    const Hdata24 = document.getElementById('h24').textContent || "Pesanan tidak ditemukan"

    if (data24 && Sdaat24 && Hdata24) {
        const sendPriductData24 = `*Produk:* ${data24}\n*Spesifikasi:* \n${Sdaat24}\n*Harga:* ${Hdata24}\n*${tanya}*`;      
        
        window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent(sendPriductData24)}`, '_blink')
    } else {
        alert(error) // abil data error 
    };
}); 

// window.open(`https://wa.me/${nomorAdmin}?text=${encodeURIComponent()}`, '_blink')

// `*Produk:* ${}\n*Spesifikasi:* \n${}\n*Harga:* ${}\n*${tanya}*`;

