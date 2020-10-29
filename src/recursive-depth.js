module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let count = 0;
        arr.forEach(value => {
            if (Array.isArray(value)) {
                count = Math.max(this.calculateDepth(value), count);
            }
        });
        return ++count;
    }
};
