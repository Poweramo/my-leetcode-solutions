/**
 * @param {character[][]} board
 * @return {boolean}
 */

function isValidSudoku(board) {
    let rows = {};
    let columns = {};
    let boxes = {};

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        for (let j = 0; j < row.length; j++) {
            const cell = row[j];

            if (rows[cell]) return false;
            if (cell !== ".") rows[cell] = "exist";
        }
        rows = {};
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = board[j][i];

            if (columns[cell]) return false;
            if (cell !== ".") columns[cell] = "exist";
        }
        columns = {};
    }

    for (let i = 0; i < board.length; i++) {
        const row = board[i];

        for (let j = 0; j < row.length; j++) {
            const cell = row[j];
            const rowIndex = Math.floor(i / 3);
            const columnIndex = Math.floor(j / 3);

            if (i !== 0) if (boxes[[rowIndex, columnIndex]]?.has(cell)) return false;
            if (cell !== ".") {
                if (boxes[[rowIndex, columnIndex]]) {
                    boxes[[rowIndex, columnIndex]].set(cell, "exist");
                } else {
                    boxes[[rowIndex, columnIndex]] = new Map();
                    boxes[[rowIndex, columnIndex]].set(cell, "exist");
                }
            }
        }
    }

    return true;
}