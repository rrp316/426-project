
let loggedIn;

if (localStorage.getItem('jwt') == null) {
    loggedIn = false;
} else {
    loggedIn = true;
}



//let loggedIn = false;

export const handleLogoutBtnPress = function () {
    localStorage.removeItem('jwt');
    localStorage.removeItem('un');

    //TODO need to redirect so that it refreshes to a non-logged in page

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
