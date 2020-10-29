module.exports = function transform(arr) {
	let transformArr = [];
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--discard-next': {
				i++;
				break;
			}
			case '--discard-prev': {
				if (i && (arr[i-2] !== '--discard-next')) transformArr.pop();
				break;
			}
			case '--double-next': {
				if (i < arr.length - 1) transformArr.push(arr[i+1]);
				break;
			}
			case '--double-prev': {
				if (i && (arr[i-2] !== '--discard-next')) transformArr.push(arr[i-1]);
				break;
			}
			default: {
				transformArr.push(arr[i]);
				break;
			}
		}
	}
	return transformArr;
};
