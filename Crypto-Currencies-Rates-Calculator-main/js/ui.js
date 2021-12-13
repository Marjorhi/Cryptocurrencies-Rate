class UI {
    constructor() {
        this.init();
    }
    init() {
        this.printCryptoCurrencies();
    }
    //Prints the option for the form
        printCryptoCurrencies() {
            cryptoAPI.getCryptoCurrenciesList().then(data => {
                // console.log(data.cryptoCurrencies.data);
    
                const cryptoCurrencies = data.cryptoCurrencies.data;
                // BUild the select from the REST API
                const select = document.getElementById('cryptocurrency')
    
                cryptoCurrencies.forEach(currency => {
                    // Add the option
                    const option = document.createElement('option');
    
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option)
                });
            });
        }
}