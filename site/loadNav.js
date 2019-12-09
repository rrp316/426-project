
let loggedIn;

if (localStorage.getItem('jwt') == null) {
    loggedIn = false;
} else {
    //console.log(localStorage.getItem('jwt'));
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

