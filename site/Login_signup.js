

export const handleSignUpButton = async () => {
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

export const handleLoginButton = async (e) => {
    e.preventDefault();
    var form = $(`#LoginForum`);

    let username = form.find('input[name=username]').val();
    let password = form.find('input[name=password]').val();
    //Login Code
    /* let result = await axios({
         method: 'POST',
         url: 'http://localhost:3000/account/login',
         data: {
             "name": username,
             "pass": password
         }
      });
      */
    await loginRequest(username, password);
}

const loginRequest = async (username, password) => {
    await axios.post('http://localhost:3000/account/login', {
        "name": username,
        "pass": password
    }).then(res => {
        localStorage.setItem('jwt', res.data.jwt);
        localStorage.setItem('un', username);
        //success code 

        //TODO redirect
        window.location.href = "myJobs.html";

    }).catch(err => {
        //failure code

    });
}

/*
export const handleForumButton = async () =>{
    //go to requestM.html
}
*/

$(document).ready(function () {
    $('#SignUp').on('click', handleSignUpButton);
    $('#Login').on('click', handleLoginButton);
    //$('#Forum').on('click', handleForumButton);
});
