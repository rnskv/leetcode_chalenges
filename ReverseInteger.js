/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x < 0) return Number(`-${reverse(x * -1)}`);
    const result = String(x).split('').reverse().join('');

    if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) return 0;
    return result;
};