const proxyURL = "https://cors-anywhere.herokuapp.com/";
const baseURL = 'https://pro-api.coinmarketcap.com/v1/';
const apiKey = 'CMC_PRO_API_KEY=e5afb77e-6cc3-4b53-85ae-6cd0deb90a00';

const apiURL = `${proxyURL}${baseURL}`;
console.log(apiURL);

class cryptoAPI {


    //Get all the cryptocurrencies
    async getCryptoCurrenciesList() {
        const url = await fetch(`${apiURL}cryptocurrency/map?limit=99&${apiKey}`);
        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }
}
