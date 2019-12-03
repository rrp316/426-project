export const handleFormSubmit = async () => {
    var form = $(`#requestMForm`);

    let firstName = form.find('input[name=first]').val();

    alert(`firstName: ${firstName}`);
};

$(document).ready(function () {
    $('#submitRequestMFormBtn').on('click', handleFormSubmit);
});