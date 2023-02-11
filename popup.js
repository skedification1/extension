
//// NEEEWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW!!!!!!!!!!!!!!

// let button = document.createElement('button');
// button.innerHTML = 'Нажми меня';
// document.body.appendChild(button);

// button.addEventListener('click', function () {
//     console.log('Привет, я TROLLLL!');
//     updateClock();
// });  
//////////////  модуль кнопки 

//////////////////////////////////////////////////////////
let dataDesk = {};
//layer_bg
const layerBg = document.createElement('div')
layerBg.classList.add('layer_bg');
document.body.append(layerBg);


const gecoImg = document.createElement('img')
gecoImg.classList.add('gecoImg');
document.body.append(gecoImg);
gecoImg.src = "https://static.coingecko.com/s/cny_2023_logo-5c7d260594cea89b082d811546586e0b02422a6d222f5513c74e0d6b6706ada0.png";

//document.getElementById("myImg").src = "hackanm.gif";









const clock = document.createElement('div'); //make elem in html
const testT = document.createElement('div');
const btcRate = document.createElement('div');
const ethRate = document.createElement('div');
const DotRate = document.createElement('div');

clock.classList.add('clock_extension'); // make class in elem html
testT.classList.add('clock_extension2');
btcRate.classList.add('btc_price');
DotRate.classList.add('dot_price');

const moonbeamRate = document.createElement('div');
moonbeamRate.classList.add('moonbeam_price');
document.body.append(moonbeamRate);

const biswapRate = document.createElement('div');
biswapRate.classList.add('biswap_price');
document.body.append(biswapRate);

const flokiRate = document.createElement('div');
flokiRate.classList.add('floki_price');
document.body.append(flokiRate);


//btcRate.innerHTML = 'Шляпа btcRate';

ethRate.classList.add('eth_price');


setInterval(updateClock, 1000);    // frame time 
updateClock();

//setInterval(updatePrice, 120000); 
//updatePrice();

document.body.append(clock);
document.body.append(testT);
document.body.append(btcRate);
document.body.append(ethRate);
document.body.append(DotRate);


function updatePrice(){
gecoEth();
gecoBtc();
gecoDot();
gecomoonbeam();
gecoBiswap();
gecoFloki();


}


function updateClock () {
    const date = new Date()
    const time = new Intl.DateTimeFormat('ru-Ru',{
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(date);

console.log(time);

clock.innerText = 'Тут будет курс крипты';
testT.innerText = time;
//ethRate.innerText = 'ETH -----';


//btcRate.innerHTML = `lol`;

//console.log('dataDesk timer', dataDesk);

}
//https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD&CMC_PRO_API_KEY=d61e0ac1-b47e-4d21-b133-ed47a6b49f97
////////////////////////////////////
const API_KEY = "d61e0ac1-b47e-4d21-b133-ed47a6b49f97";                   
const endpointCoinmarket = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD&CMC_PRO_API_KEY=${API_KEY}`;

async function getBitcoinPrice() {
    try {
      const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); // coindesk
      // Check if the response is successful (status code in the 200s)
      if (!response.ok) {
        throw new Error(`Запрос упал получение ____ ${response.status}`);
      }
      console.log('Запрос пройден втф');  
      const data = await response.json();
      dataDesk = data;
      console.log('dataDesk', dataDesk);
      console.log(data);
      
      /////////////////////////////////////////////////////////////////////////// Extract the current USD exchange rate from the data
      const rate = data.bpi.USD.rate_float;// coindesk data rate
      console.log(`1 Bitcoin is currently worth ${rate} USD.`);
      btcRate.innerHTML = `BTC - $${rate}`;

      return rate;
    } catch (error) {
      // Log the error to the console
      console.error(error);
    }
  }

  //https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd
async function gecoEth (){
try {
  const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'); // coindesk

  if (!response.ok) {
    throw new Error(`Запрос упал получение ____ ${response.status}`);
  }
  console.log('Запрос пройден втф');
  const data = await response.json();
  const rate = data.ethereum.usd;
   // const rate = data.data.BTC.quote.USD.price; 
  console.log(`1 Эфир стоит  ${rate} USD.`);
  ethRate.innerHTML = `ETH - $${rate}`;
  return rate;
} catch (error) {
  console.error(error);
}}

async function gecoBtc (){
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'); // coindesk
  
    if (!response.ok) {
      throw new Error(`Запрос упал получение ____ ${response.status}`);
    }
    const data = await response.json();
    const rate = data.bitcoin.usd;
     // const rate = data.data.BTC.quote.USD.price; 
    console.log(`1 BTC стоит  ${rate} USD.`);
  
  btcRate.innerHTML = `BTC - $${rate}`;
    return rate;
  } catch (error) {
    console.error(error);
  }
}

async function gecoDot (){
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=polkadot&vs_currencies=usd'); // coindesk
  
    if (!response.ok) {
      throw new Error(`Запрос упал получение ____ ${response.status}`);
    }
    const data = await response.json();
    const rate = data.polkadot.usd;
     // const rate = data.data.BTC.quote.USD.price; // coinmarketcap data rate
    console.log(`1 DOT стоит  ${rate} USD.`);
  
  DotRate.innerHTML = `DOT - $${rate}`;
    return rate;
  } catch (error) {
    console.error(error);
  }
}


async function gecomoonbeam (){
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=moonbeam&vs_currencies=usd'); // coindesk
  
    if (!response.ok) {
      throw new Error(`Запрос упал получение ____ ${response.status}`);
    }
    const data = await response.json();
    const rate = data.moonbeam.usd;
     // const rate = data.data.BTC.quote.USD.price; // coinmarketcap data rate
    console.log(`1 GLMR стоит  ${rate} USD.`);
  
    moonbeamRate.innerHTML = `GLMR - $${rate}`;
    return rate;
  } catch (error) {
    console.error(error);
  }
}
async function gecoBiswap (){
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=biswap&vs_currencies=usd'); // coindesk
  
    if (!response.ok) {
      throw new Error(`Запрос упал получение ____ ${response.status}`);
    }
    const data = await response.json();
    const rate = data.biswap.usd;
     // const rate = data.data.BTC.quote.USD.price; // coinmarketcap data rate
    console.log(`1 BSW стоит  ${rate} USD.`);
  
    biswapRate.innerHTML = `BSW - $${rate}`;
    return rate;
  } catch (error) {
    console.error(error);
  }
}

async function gecoFloki (){
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=floki&vs_currencies=usd'); // coindesk
  
    if (!response.ok) {
      throw new Error(`Запрос упал получение ____ ${response.status}`);
    }
    const data = await response.json();
    const rate = data.floki.usd;
     // const rate = data.data.BTC.quote.USD.price; // coinmarketcap data rate
    console.log(`1 FLOKI стоит  ${rate} USD.`);
  
    flokiRate.innerHTML = `FLOKI - $${rate}`;
    return rate;
  } catch (error) {
    console.error(error);
  }
}


 
  // async function coinmarketData () {
  //   try {
  //     //const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); // coindesk
  //     //const response = await fetch(endpointCoinmarket);
  //     const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD&CMC_PRO_API_KEY=d61e0ac1-b47e-4d21-b133-ed47a6b49f97');

  //     // Check if the response is successful (status code in the 200s)
  //     // if (!response.ok) {
  //     //   throw new Error(`Запрос упал получение ____ ${response.status}`);
  //     // }
  //     console.log('Запрос пройден втф');
      
      
  //     const data = await response.json();
  //     dataDesk = data;
  //     console.log('dataDesk', dataDesk);
      
  //                                                //console.log(data);
      
  //     /////////////////////////////////////////////////////////////////////////// Extract the current USD exchange rate from the data
  //    // const rate = data.bpi.USD.rate_float;// coindesk data rate
  //       const rate = data.data.BTC.quote.USD.price; // coinmarketcap data rate
    
  //     console.log(`1 Bitcoin is currently worth ${rate} USD.`);
 
  //     btcRate.innerHTML = `BTC COINMARKET - $${rate}`;

    

     
      


  //     return rate;
  //   } catch (error) {
  //     // Log the error to the console
  //     console.error(error);
  //   }
  // }



