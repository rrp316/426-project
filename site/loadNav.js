//Make it check if Actually logged in

/*
let loggedin
if (localStorage.getItem('jwt') == null){
    loggedin = false;
} else {
    loggedin = true;
}
*/

let loggedIn = false;

$(function () {
    if (loggedIn) {
        $("#nav").load("loggedInNav.html");
    } else {
        $("#nav").load("unloggedInNav.html");
    }
});