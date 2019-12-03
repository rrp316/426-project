let loggedIn = false;

$(function () {
    if (loggedIn) {
        $("#nav").load("loggedInNav.html");
    } else {
        $("#nav").load("unloggedInNav.html");
    }
});