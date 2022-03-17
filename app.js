let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
let stockPriceElement = document.getElementById('stock-price');
let lastPrice = null;

ws.onmessage = (event) => {
    let stockobject = JSON.parse(event.data);
    let price = parseFloat(stockobject.p).toFixed(2);
    stockPriceElement.innerText = price;

    stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green': 'red';

    lastPrice = price;

};