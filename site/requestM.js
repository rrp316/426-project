export const handleFormSubmit = async () => {
    var form = $(`#requestMForm`);

    let firstName = form.find('input[name=first]').val();
    let lastName = form.find('input[name=last]').val();
    let address = form.find('input[name=address]').val();
    let city = form.find('input[name=city]').val();
    let state = form.find('input[name=state]').val();
    let zip = form.find('input[name=zip]').val();
    let description = form.find('textarea[name=description]').val();

    let resourceName = firstName + lastName + zip;

    await axios({
        method: 'POST',
        url: `http://localhost:3000/public/requests/${resourceName}`,
        data: {
            data: {

                'firstName': firstName,
                'lastName': lastName,
                'address': address,
                'city': city,
                'state': state,
                'zip': zip,
                'description': description

            }
        }
    });

    $(location).attr('href', 'thanks.html');
};

$(document).ready(function () {
    $('#submitRequestMFormBtn').on('click', handleFormSubmit);
});