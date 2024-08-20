import Button from "../Button"

function Status() {
    return (
<div className="p-3 m-3 border-4 border-slate-950 rounded">
    <h1 className="font-bold">Unpopular opinionator!</h1>
    <h2>Here is a potentially unpopular opinion! Tell us whether you agree...</h2>
        <p>Marmite is not really all that nice</p>
        <div className="flex gap-3">
            <Button text='Like' />
            <Button text='Dislike' />
            <Button text='Lowkey Agree' />
        </div>
</div>
    )
}

export default Status