/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 
function luckyNumbers(matrix) {
    let minRow = [];
	let columns = [];
	let maxColumn = [];
	let luckyNumber;

	matrix.forEach((row) => {
		minRow.push(Math.min(...row));
	});

	for (let k = 0; k < matrix[0].length; k++) {
		columns.push([]);
	}

	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i];

		for (let j = 0; j < row.length; j++) {
			const cell = row[j];
			columns[j].push(cell);
		}
	}

	columns.forEach((column) => {
		maxColumn.push(Math.max(...column));
	});

	luckyNumber = minRow.filter((number) => maxColumn.includes(number));
	return luckyNumber;
};