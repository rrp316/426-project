
let loggedIn;

if (localStorage.getItem('jwt') == null) {
    loggedIn = false;
} else {
    loggedIn = true;
}



//let loggedIn = false;

export const handleLogoutBtnPress = function () {

};


$(function () {
    if (loggedIn) {
        $("#nav").load("loggedInNav.html");
    } else {
        $("#nav").load("unloggedInNav.html");
    }
});

document.body.onload = function () {
    $('#logoutBtn').on('click', handleLogoutBtnPress);
}
