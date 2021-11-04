const endpointWorld = 'https://api.covid19api.com/summary';



async function getData(url) {

    const response = await fetch(url);

    const data = await response.json();

    return data;
}

window.addEventListener('DOMContentLoaded', async() => {

    const data = await getData(endpointWorld);


    let { Global, Countries } = data; //destructing
    console.log(Countries);

    //Getting all Countries
    const pays = Countries.map((item) => {

        return item.Country;

    })

    const dead = Countries.map((item) => {

        return item.TotalDeaths;

    })

    const total = Countries.map((item) => {

        return item.TotalConfirmed;

    })






    const newCountries = Countries.map((item) => {

        return {
            country: item.Country,
            deaths: item.TotalDeaths,
            confirmed: item.TotalConfirmed,

        }



    })



    console.log(newCountries);

    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: pays,
            datasets: [{
                    label: 'Total Confirmed',
                    data: total,
                    borderColor: [
                        '#105652',

                    ],
                    backgroundColor: [
                        '#105652',

                    ],

                    borderWidth: 4
                },
                {
                    label: 'Total Deaths',
                    data: dead,
                    borderColor: [
                        '#B91646',

                    ],
                    backgroundColor: [
                        '#B91646',

                    ],

                    borderWidth: 4
                }
            ]
        },
        options: {
            scales: {
                y: {

                    beginAtZero: true
                }

            }
        }
    });

});