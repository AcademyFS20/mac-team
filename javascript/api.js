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
  const dataCountries = await getData(endpointWorld);

  const {Countries} = dataCountries;
  
  let DataCountries = Countries.map((item) =>{

       return {country:item.Country,totalConfirmed : item.TotalConfirmed,newConfirmed:item.NewConfirmed};
  })

    let CountryM = data.filter((item) => {

        if(item.Country === 'Morocco')
        {
            return item;
        }
    })

  
    
    let CountryData = data.map(item => {
           return item.Country;
    });
    CountryData.forEach(element => {
        let option = document.createElement("option");
        let cntry = document.createTextNode(element);
        option.appendChild(cntry);
        select.appendChild(option)   
        
    });

    console.log(DataCountries);
    const options = [...document.querySelectorAll('option')];
    options[0].innerText = CountryM[0].Country;

    DataCountries.forEach(item => {

      if(item.country === options[0].innerText) {
         
           const text = document.querySelector('.title');
           text.innerHTML = item.totalConfirmed;
           document.querySelector('.death').innerHTML = item.newConfirmed;
      }
    })
});
