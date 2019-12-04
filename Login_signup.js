export const handleSignUpButton = async () =>{
 // sign up code
 var form = $(`#createAccount`);

 let username = form.find('input[name=username]').val();
 let password = form.find('input[name=password]').val();


}

export const handleLoginButton = async () =>{
    var form = $(`#LoginForum`);

 let username = form.find('input[name=username]').val();
 let password = form.find('input[name=password]').val();
    //Login Code

}

export const handleForumButton = async () =>{
    //go to requestM.html
}

$(document).ready(function () {
    $('#SignUp').on('click', handleSignUpButton);
});

$(document).ready(function () {
    $('#Login').on('click', handleLoginButton);
});

$(document).ready(function () {
    $('#Forum').on('click', handleForumButton);
});