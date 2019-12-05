/* TO-DO: fill out axios request to the backend for getOutages()
 then let Josh know when that's done so that Josh can fill out the rest of the below 
 document.body.onload function

 In my mind, the backend can just have a list of like 10 outages at random locations 
 that we make up. Let me know if that works.
 */


async function getOutages() {
    const outages = await axios({
        method: 'get',
        url: 'http://localhost:3000/public/requests',
    });
    //outages.data.result is what has the requests
    return outages;
}

document.body.onload = async function () {
    let outages = await getOutages();
    console.log(outages.data.result);
    let outagesCount = outages.length;
    for (let i = 0; i < outagesCount; i++) {
        $('#feed').append(`
            <div class="card">
                
            </div>`);
    }
}