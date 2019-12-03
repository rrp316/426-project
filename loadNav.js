let loggedIn = false;

$(function () {
    if (loggedIn) {
        $("#nav").load("unloggedInNav.html");
    } else {
        $("#nav").load("loggedInNav.html");
    }
});