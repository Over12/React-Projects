interface saveGameProps {
    newBoard: string[];
    newTurn: string;
}

export function saveGameStorage({ newBoard, newTurn }: saveGameProps){
    //Guardar partida en localStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
}

export function resetGameStorage(){
    //Borrar partida en localStorage
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
}