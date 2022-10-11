import axios from 'axios';

//Get your API_KEY fro https://fixer.io/
const API_KEY = '8Guk21njTTvdnTyqUbbpF4MwG68XJmWK';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${API_KEY}`;

//https://restcountries.com
const REST_COUNTRIES_API = 'https://restcountries.com/v3.1/currency';

//fecth data about counties
const getExchangeRate = async(fromCurrency,toCurrency) => {
    try{
        const {data:{rates}} = await axios.get(FIXER_API);

        const euro = 1/rates[fromCurrency];
        const exchangeRate = euro*rates[toCurrency];

        return exchangeRate;
    }catch(error){
        throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
    }
}

getExchangeRate('USD','EUR');

const getCountries = async(currencyCode) => {
    const {data} = await axios.get(`${REST_COUNTRIES_API}/$${currencyCode}`);

    return data.map(({name})=>name);

}

const convertCurrency = async(fromCurrency,toCurrency,amount) => {
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();

    const [exchangeRate,countries] = await Promise.all([
        await getExchangeRate(fromCurrency,toCurrency),
        await getCountries(toCurrency),
    ]);

    const convertedAmount = (amount*exchangeRate).toFixed(2);

    return (
        `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency},
         You can spend these in the following: ${countries}`
    );
}

convertCurrency('AUD','USD',20);
