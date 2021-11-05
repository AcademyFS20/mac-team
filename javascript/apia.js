const endpointWorld = 'https://api.covid19api.com/dayone/country/morocco/status/confirmed';

console.log(endpointWorld)

async function getData(url) {

    const response = await fetch(url);

    const data = await response.json();
   
    return data;
}

window.addEventListener('DOMContentLoaded', async() => {

    const data = await getData(endpointWorld);
    console.log(data)


    //Getting all Countries
    const pays = data.map((item) => {

        return item.Date

    });


    const sliced = pays.slice(600, 608)

    function dateFormat(array){
        return array.splice(0, 8, 23, 24, 25, 26, 27, 28, 29, 30)
    }
    
    dateFormat(sliced)



    const cases = data.map((item) => {

        return item.Cases;

    });


    const slicedCases = cases.slice(600, 608);
    
    const newCases = slicedCases.map(item =>{
        return item;
    })
    

    const ctx = document.getElementById('myChart1').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sliced,
            datasets: [{
                label: 'Case numbers',
                data: newCases,
                backgroundColor: [
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)'
                ],
                borderColor: [
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)',
                    'rgba(75, 75, 225)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins:{
                title: {
                  display: true,
                  text: 'Morocco Covid 19 information'
                }
              },
            scales: {
                y: { 
                    beginAtZero: true, 
                    ticks: {
                        callback: function(val,index,values) {
                          return val;
                        }},
                }, 
                
            }
        }
    })
})


    
    
    
    

