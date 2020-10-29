module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let obj = {};
	obj.turns = Math.pow(2, disksNumber) - 1;
	obj.seconds = Math.floor(obj.turns / turnsSpeed * 3600);
	return obj;
};
