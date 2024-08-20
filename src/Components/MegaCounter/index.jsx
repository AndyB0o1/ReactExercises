import { useState } from "react"

function MegaCounter({ text }) {

    const [count, setCount] = useState(0)
    const [increment, setIncrement] = useState(1)

    function handleClick() {
        setCount(count + increment)
    }

    function increaseIncrement() {

        setIncrement(increment + 1)
    }

    function decreaseIncrement() {
        if (increment > 1) {
            setIncrement(increment - 1)
        }
        else { setIncrement(1) }
    }

    function resetCount() {
        setCount(0)
    }

    function resetIncrement() {
        setIncrement(1)
    }

    return (
        <div className="m-3 p-3 border-4 border-red-600 rounded">
            <h1 className="py-2 font-bold text-xl">Try out the Mega Counter!</h1>
            <button onClick={handleClick} className="bg-cyan-900 text-white rounded-lg p-2 mb-2">Click me</button>
            <p className="p-2 text-red-600 text-4xl">{count}</p>
            <p>Increase or decrease the count increment by clicking one of the buttons below</p>
            <button onClick={increaseIncrement} className="p-2 bg-slate-200 border border-black rounded-lg mr-4">+</button>
            <button onClick={decreaseIncrement} className="p-2 bg-slate-200 border border-black rounded-lg mr-2">-</button>
            <p className="m-1">Counting up in steps of {increment}</p>
            <button onClick={resetIncrement} className="p-2 bg-slate-200 border border-black rounded-lg mr-4">Reset increment</button>
            <button onClick={resetCount} className="p-2 bg-slate-200 border border-black rounded-lg mr-4">Reset counter</button>
        </div>
    )
}

export default MegaCounter
