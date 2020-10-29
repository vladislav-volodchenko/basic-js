module.exports = function repeater(str, options) {
    const res = [];
    if (options.separator === undefined) options.separator = '+';
    if (options.additionSeparator === undefined) options.additionSeparator = '|';
    if (options.repeatTimes === undefined) options.repeatTimes = 1;
    if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
    if (options.addition === null) options.addition += '';
    for (let i = 0; i < options.repeatTimes; i++) {
        const add = [];
        for (let j = 0; j < options.additionRepeatTimes; j++) {
            add.push(options.addition);
        }
        res.push(str + add.join(options.additionSeparator));
    }
    return res.join(options.separator);
};
