import { Square } from "./Square";

export function WinnerModal({ winner, resetGame }: { winner: string | null | boolean, resetGame: () => void }) {
    if (winner === null) return null;
    const winnerText = winner === false ? "Empate" : "Ganó:";

    return (
        <section className="winner">
            <div className="text">
                <h2>{ winnerText }</h2>

                <header className="win">
                    { winner && typeof winner === 'string' && <Square>{ winner }</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}