
const loadRequestForm = function() {
  //TODO: standardize html to match the format of the site
    let body = $(`body`);
    body.append(`<h1 class = "title">Request Maintenance Form</h1>`);
    let container = $(`<div class = "container"></div>`);
    let form = $(`<form></form>`);
    form.append(`<label class = "label">First Name</label>
    <input name = "first" class="input" type="text">`);
    form.append(`<label class = "label">Last Name</label>
    <input name = "last" class="input" type="text">`);
    form.append(`<label class = "label">Address</label>
    <input name = "address" class="input" type="text">`);
    form.append(`<label class = "label">City</label>
    <input name = "city" class="input" type="text">`);
    form.append(`<label class = "label">State</label>
    <input name = "state" class="input" type="text">`);
    form.append(`<label class = "label">ZIP Code</label>
    <input name = "zip" class="input" type="text">`);
  //add other form items if needed
  form.append(`<label class = "label">Description Of Issue<label>
  <textarea name = "descript" class="textarea"></textarea>`);
  form.append(`<button class = "submit" type = "submit">Submit</button>`);
  container.append(form);
  body.append(container);
}

//TODO: add handle for submit and make sure all parts are filled


$(function() {
    loadRequestForm();
});