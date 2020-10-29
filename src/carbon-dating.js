const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
	let numActivity = +str;
	let k=0.693/HALF_LIFE_PERIOD;
	let t = Math.log(MODERN_ACTIVITY/numActivity) / k;
	if (typeof(str) !== 'string' || typeof(numActivity) !== 'number' || isNaN(numActivity) || numActivity <= 0 || t < 0) return false;
	return t;
};
