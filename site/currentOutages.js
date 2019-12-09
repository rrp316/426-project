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
        $('#outagesParentDiv').prepend(`
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        ${outages[i]['city']}
                        <br />
                        ${outages[i]['state']} ${outages[i]['zip']}
                    </div>
                </div>
            </div>
            <br />`);
    }
}