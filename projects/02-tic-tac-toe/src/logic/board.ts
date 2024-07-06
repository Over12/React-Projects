import { WINNER_COMBINATIONS } from "../constants";

export const checkWinnerFrom = (boardToCheck: string[] | null[]) => {
    if (boardToCheck) {
        for (const combination of WINNER_COMBINATIONS) {
            const [a, b, c] = combination;
            if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[b] === boardToCheck[c]) {
                return boardToCheck[a];
            }
        }
        return null;
    }
    return null;
}

export const checkEndGame = (boardToCheck: string[] | null[]) => {
    return boardToCheck.every((square) => square !== null)
}