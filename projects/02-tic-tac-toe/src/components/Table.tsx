import { Square } from "./Square"

interface tableProps {
    board: string[];
    updateBoard: (index: number) => void;
}

export function Table({board, updateBoard}: tableProps) {
    return (
        <section className="game">
            {
                board.map((_, index) => {
                    return (
                    <Square key={index} index={index} updateBoard={updateBoard}>
                        {board[index]}
                    </Square>
                )
                })
        }
        </section>
    )
}