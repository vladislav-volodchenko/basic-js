module.exports = function createDreamTeam(arr) {
	let encrypt = '';
	if (Array.isArray(arr)){
		for (let i = 0; i < arr.length; i++) {
			if (typeof(arr[i]) !== 'string') {
				arr.splice(i, 1);
				i--;
			}
		}
		arr.flat().map(value => value.trim()).forEach(value => encrypt += value.slice(0,1).toUpperCase());
	} else encrypt = false;
	return encrypt ? encrypt.split('').sort().join('') : encrypt;
};
