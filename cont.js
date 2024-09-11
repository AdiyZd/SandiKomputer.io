document.addEventListener("DOMContentLoaded", function() {
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

    var isLoggedIn = getCookie('loggedin') === 'true';

    var loginLink = document.getElementById('login-link');
    var linkElement = loginLink.querySelector('a');

    if (isLoggedIn) {
        linkElement.href = 'out.php'; // URL logout
        linkElement.textContent = 'Logout';
    } else {
        linkElement.href = 'login.html';
        linkElement.textContent = 'Login';
    }
});
