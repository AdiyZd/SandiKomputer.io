

// gass js 

document.getElementById('hilang').addEventListener('click', function() {
    if (!b1.disabled) {
        b1.disabled = true
        b2.disabled = false
    } else {
        b1.disabled = false
        b2.disabled = true
    }

    setTimeout(() => {
        document.body.classList.remove('transition');
    }, 5000 )
})