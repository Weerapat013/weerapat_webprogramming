document.addEventListener("DOMContentLoaded", function () {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "m3K70PQtu3ZsqRKKw6B7kTXQccV9PzNf");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=thb&base=eur", requestOptions)
    .then(response => response.json())
    .then(result => {
        const rate = result.rates.THB
        document.querySelector("#exchangeRate").innerHTML = `1 EUR = ${rate} baht`;

        let amountTHB = document.querySelector("#amount-THB").value;
        let amountEUR = 0;

        amountEUR = (amountTHB / rate).toFixed(2);

        document.querySelector("#amount-EUR").innerHTML = amountEUR;
    })
    .catch(error => console.log('error', error));
});