export const handleAddressSearch = async () => {
    let input = $(`#addressSearchInput`).val();
    console.log(`input: ${input}`);
}

$(document).ready(function () {
    $('#addressSearchBtn').on('click', handleAddressSearch);
});