//Make it check if Actually logged in

let loggedIn = false;

$(function () {
    if (loggedIn) {
        $("#nav").load("unloggedInNav.html");
    } else {
        $("#nav").load("loggedInNav.html");
    }
});