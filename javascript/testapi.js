const endpointWorld = 'https://api.covid19api.com/summary';
const contries = 'https://api.covid19api.com/countries';
let contryname = document.querySelector('.contryname');
async function getData(){
    const response = await fetch(endpointWorld);
    const data = await response.json();
    let CountryData = data.map(item => {
        return item.Country;
 });
 CountryData.forEach(element => {
     let option = document.createElement("option");
     let cntry = document.createTextNode(element);
     option.appendChild(cntry);
     select.appendChild(option);      
 });
    let contryname = document.querySelector('.contryname');
    contryname.innerHTML = `<select>
    <option></option>
    </select>`;
}
getData();