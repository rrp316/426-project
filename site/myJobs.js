//TO-DO: fill out the axios request to retrieve my jobs

async function getMyJobs() {
    const jobs = await axios({
        method: 'get',
        url: '',
    });
    return jobs;
}

document.body.onload = async function () {
    let jobs = await getMyJobs();

    //then Josh can add it to the DOM
}