import { CellShape } from './types';

const floor3 = (num: number) => Math.floor((num - 1) / 3);
const getPosition = (index: number) => {
    const row = 1 + Math.floor(index / 9);
    const column = 1 + index - 9 * (row - 1);
    const block = 3 * floor3(row) + (1 + floor3(column));
    return { row, column, block };
};

export default function createBoard(
    puzzle: string,
    solution: string
): CellShape[] {
    if (puzzle.length !== 81 || solution.length !== 81) {
        throw new Error('Wrong Puzzle Length LMAO');
    }

    return Array.from(puzzle, (char, i) => {
        const { row, column, block } = getPosition(i);
        return {
            isGiven: char === solution[i],
            currentValue: parseInt(char),
            solvedValue: parseInt(solution[i]),
            candidates: [],

            highlight: null,

            row,
            column,
            block,
            index: i,
        };
    });
}

// export default function createBoard(puzzle: string, solution: string) {
//     if (puzzle.length !== 81 || solution.length !== 81) {
//         throw new Error('Wrong Puzzle Length LMAO');
//     }

//     const board: CellShape[][] = Array(9).fill([]);
//     for (let i = 0; i < 81; i++) {
//         const [row, column, block] = getPosition(i);
//         board[block - 1] = [
//             ...board[block - 1],
//             {
//                 isGiven: puzzle[i] === solution[i],
//                 currentValue: parseInt(puzzle[i]),
//                 solvedValue: parseInt(solution[i]),
//                 candidates: [],

//                 row,
//                 column,
//                 block,

//                 highlight: null,
//             },
//         ];
//     }
//     return board;
// }
