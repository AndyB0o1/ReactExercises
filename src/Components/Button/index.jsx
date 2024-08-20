import { useState } from "react"

function Button({text}) {

    const [count, setCount] = useState(0)

    function userOpinion() {
        setCount(count + 1)
    }
    return (
        <button onClick={userOpinion} className="p-2 rounded-lg bg-orange-600 text-white">{text} ({count})</button>
    )
}

export default Button