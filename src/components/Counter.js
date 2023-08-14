import '../App.css'

export default function Counter() {
    return (
        <div className="counter__container">
            <h2>
                Счетчик:
            </h2>
            <h1>
                {0}
            </h1>
            <div>
                <button className="counter_button minus">- Минус</button>
                <button className="counter_button plus">Плюс +</button>
            </div>
        </div>
    )
}