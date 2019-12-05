export const handleFormSubmit = async () => {
    var form = $(`#requestMForm`);

    let firstName = form.find('input[name=first]').val();
    let lastName = form.find('input[name=last]').val();
    let address = form.find('input[name=address]').val();
    let city = form.find('input[name=city]').val();
    let state = form.find('input[name=state]').val();
    let zip = form.find('input[name=zip]').val();
    let description = form.find('textarea[name=description]').val();

    console.log(`${firstName}`);
    console.log(`${lastName}`);
    console.log(`${address}`);
    console.log(`${city}`);
    console.log(`${state}`);
    console.log(`${zip}`);
    console.log(`${description}`);

    //TO-DO: send the above form data to the backend and remove the console logs

    $(location).attr('href', 'thanks.html');
};

$(document).ready(function () {
    $('#submitRequestMFormBtn').on('click', handleFormSubmit);
});