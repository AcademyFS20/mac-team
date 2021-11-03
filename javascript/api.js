const endpointWorld = 'https://api.covid19api.com/summary';
const contries = 'https://api.covid19api.com/countries'
// const endpointMorocco = 'https://api.covid19api.com/dayone/country/france/status/confirmed';
//asyn function return promise
async function getData(url){

    try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
catch(error){
console.error(error.message)
}   
}
// async geting promise data from function get data
window.addEventListener("DOMContentLoaded", async () =>{
    let select = document.querySelector(".select");
    const data = await getData(contries);
    const confirmCases = await getData(endpointWorld);
    console.log(confirmCases);
    
    let CountryData = data.map(item => {
           return item.Country;
    });
    CountryData.forEach(element => {
        let option = document.createElement("option");
        let cntry = document.createTextNode(element);
        option.appendChild(cntry);
        select.appendChild(option)   
        
    });
});
