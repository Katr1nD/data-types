import {
    isDev
} from "./environment.js";
import {
    currencyExchangeRate
} from "./mock-data.js";

function converterCurrency() {
    getCurrencyExchangeRate().then(console.log);
}

/**
 * @returns {Promise} currency exchange rate 
 */
function getCurrencyExchangeRate() {
    const key = 'bee09f380b4c18f28b2bce0e2c80e0a3';
    if (isDev) {
        return Promise.resolve(currencyExchangeRate);
    } else {
        let currencyExchangeRate = fetch(`http://data.fixer.io/api/latest?access_key=${key}&format=1`, {
            mode: "cors"
        });
        currencyExchangeRate
            .then(response => response.json().then(text => text))
            .catch(console.error);
    }
}

converterCurrency()