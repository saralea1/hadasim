

async function homePage() {
    const customers = await axios.get(`http://localhost:3100/customers`)
    console.log(customers.data);
    document.getElementsByTagName("main")[0]
        .innerHTML = `<ul>
         ${customers.data.map(c => `<li class ="liCustomer" onclick="customerPage(${c.id})">
         <ul>
         <li>id: ${c.id}</li>
         <li>id system: ${c._id}</li>
         <li>first name: ${c.firstName}</li>
         <li>last name: ${c.lastName}</li>
         </ul>
         </li>`)
        } 
         </ul > `
}

async function customerPage(id) {
    // window.location.href = "./customer.html";

    const customers = (await axios.get(`http://localhost:3100/customers?id=${id}`))
    const c = customers.data[0]
    console.log(customers, c);
    document.getElementsByTagName("main")[0]
        .innerHTML = `<div class = "divCustomer"> 
        <h4>Personal Information:</h4>
        <ul>
        <li>id: ${c.id}</li>
        <li>id system: ${c._id}</li>
        <li>first name: ${c.firstName}</li>
        <li>last name: ${c.lastName}</li>
        <li>address: <span>${c.address.city}</sapn> <span>${c.address.street}</sapn> <span>${c.address.number}</sapn></li>
        <li>birth date: ${c.birthdate.slice(0, 10)}</li>
        <li>phone: ${c.phon ?? ""}</li>
        <li>mobile phone: ${c.mobilePhone ?? ""}</li>
        </ul>
        <h4>Details about Corona:</h4>
        <ul>
        <li><b>vaccinations: </b>
        <ul>
        ${c.vaccinations.map((v, i) => `<li>
        ${i + 1}:
        <div class="covidDiv"> The date of receiving the vaccine: ${v.dateOfVaccination.slice(0, 10)}</div>
        <div class="covidDiv">manufacturer: ${v.manufacturer}</div>
        </li>`)}
        </ul>
        </li>
        ${c.covid19Morbidity ? `<li>
            <b>covid 19 morbidity: </b>
            <div class="covidDiv">date of receiving a positive result: ${c.covid19Morbidity.dateOfReceivingPositiveResult.slice(0, 10)}</div>
            <div class="covidDiv">date of recovery: ${c.covid19Morbidity.dateOfRecovery.slice(0, 10)}</div>
        </li>` : ""}
        </ul></div>`
}

if (window.location.href == "./customer.html") {

}
else {

}

homePage()

