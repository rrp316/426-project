//Make it check if Actually logged in


let loggedIn;

if (localStorage.getItem('jwt') == null) {
    loggedIn = false;
} else {
    loggedIn = true;
}



//let loggedIn = false;


$(function () {
    if (loggedIn) {
        $("#nav").load("loggedInNav.html");
    } else {
        $("#nav").load("unloggedInNav.html");
    }
});
