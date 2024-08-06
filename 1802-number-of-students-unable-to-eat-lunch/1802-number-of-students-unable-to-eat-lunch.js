/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

function countStudents(students, sandwiches) {
	let limit = 0;
    
	while (students.length) {
		if (students[0] === sandwiches[0]) {
			students.shift();
			sandwiches.shift();
            limit = 0
		} else {
			students.push(students.shift());
			limit++;
		}

		if (limit === students.length) break;
	}

	return students.length;
}