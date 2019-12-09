document.body.onload = function () {
    localStorage.removeItem('jwt');
    localStorage.removeItem('un');
    window.location.href = "index.html";
}