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
    return outages;
}

document.body.onload = async function () {
    let outages = await getOutages();
    outages = outages.data.result;

    for (let i in outages) {
        $('#outagesParentDiv').append(`
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        ${outages[i]['address']} ${outages[i]['city']}
                        <br />
                        ${outages[i]['state']} ${outages[i]['zip']}
                    </div>
                </div>
            </div>
            <br />`);
    }
}