module.exports = function countCats(arr) {
	let count = 0;
  arr.flat().forEach(value => {if (value === '^^') count++});
  return count;
};
