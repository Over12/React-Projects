interface squareProps{
    children: string;
    isSelected?: boolean;
    updateBoard?: (arg: number) => void;
    index?: number;
}

export const Square = ({ children, isSelected, updateBoard, index }: squareProps) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;

    const handleClick = () => {
        if (updateBoard && index !== undefined) {
        updateBoard(index);
        }
    }

    return (
        <div onClick={handleClick} className={className}>
        {children}
        </div>
    )
}