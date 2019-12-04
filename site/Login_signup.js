

export const handleSignUpButton = async () =>{
 // sign up code
 var form = $(`#createAccount`);

 let username = form.find('input[name=username]').val();
 let password = form.find('input[name=password]').val();
 let result = await axios({
    method: 'POST',
    url: 'http://localhost:3000/account/create',
    data: {
        "name": username,
        "pass": password
    }
 });


}

export const handleLoginButton = async () =>{
    var form = $(`#LoginForum`);

 let username = form.find('input[name=username]').val();
 let password = form.find('input[name=password]').val();
    //Login Code
    let result = await axios({
        method: 'POST',
        url: 'http://localhost:3000/account/login',
        data: {
            "name": username,
            "pass": password
        }
     });
     localStorage.setItem('jwt', result.data.jwt);

}


export const handleForumButton = async () =>{
    //go to requestM.html
}

$(document).ready(function () {
    $('#SignUp').on('click', handleSignUpButton);
    $('#Login').on('click', handleLoginButton);
    $('#Forum').on('click', handleForumButton);

});
