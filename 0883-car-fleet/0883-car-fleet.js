/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

function carFleet(target, position, speed) {
	let cars = [];
	let carsDurations = [];

	for (let i = 0; i < position.length; i++) {
		cars.push({ pos: position[i], spd: speed[i] });
	}
	cars = cars.sort((a, b) => b.pos - a.pos);

	for (let i = 0; i < cars.length; i++) {
		const car = cars[i];
		const carArrivalDuration = (target - car.pos) / car.spd;
		carsDurations.push(carArrivalDuration);

		if (carsDurations.length >= 2)
			if (carArrivalDuration <= carsDurations[carsDurations.length - 2]) carsDurations.pop();
	}

	return carsDurations.length;
}