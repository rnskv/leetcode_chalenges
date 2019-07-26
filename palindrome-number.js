/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = `${x}`;
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        if (str[start] !== str[end]) {
            return false
        } else {
            end--;
            start++;
        }
    }

    return true;
};