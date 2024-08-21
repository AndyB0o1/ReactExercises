import { useEffect, useState } from "react"

function FreddoExchange() {
    const [bit, setBit] = useState()

    useEffect(() => {
        const getBitData = () => {
            fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
                .then(res => res.json())
                .then(bitData => {
                    setBit(bitData.bpi.GBP.rate_float)
                })
        }
        getBitData()
        const interval = setInterval(() => {
            getBitData()
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    const rate = parseFloat(bit).toFixed(2)

    let noOfFreddos = parseFloat(rate / 0.25).toFixed()

    return (
        <div className="m-3 border-4 border-violet-800 rounded">
            <h1 className="p-3 text-violet-800 font-bold">Ever wondered how many Freddos a Bitcoin will buy? What do you mean no... well, in case you have:</h1>
            <h2 className="p-3">1 Bitcoin = £{rate}</h2>
            <p className="p-3">That's <span className="text-violet-800 font-bold">{noOfFreddos}</span> Freddo Bars!</p>
            <img className="freddoPic max-h-80" src="https://www.handycandy.co.uk/image/webp/catalog/Products/cadburys-dairy-milk-freddos-7-bars-retro-sweets-2021-1100x1100h.webp"></img>
            <br />
        </div>

    )
}

export default FreddoExchange