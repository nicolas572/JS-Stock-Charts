function getColor(stock) {
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

    const reponse = await fetch ('https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=8362751f5d024646849340310dc0c5f4')

    const result = await reponse.json()

    const {GME, MSFT, DIS, BNTX} = result;

    const stocks = [GME, MSFT, DIS, BNTX];

    // stocks.forEach (stock => stock.values = stock.values.reverse())
    console.log(stocks)
}

main()