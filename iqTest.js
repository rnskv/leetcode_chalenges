function iqTest(numbers){
    const arr = numbers.split(' ');
    let oddCount = 0;
    let evenCount = 0;

    let firstTrigger = -1;

    let firstIsOdd = isOdd(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        if (isOdd(arr[i])) {
            oddCount++
        } else {
            evenCount++
        }

        if (isOdd(arr[0]) !== isOdd(arr[i])) {
            if (firstTrigger === -1) { firstTrigger = i }
        }
    }

    if (firstIsOdd) {
        if (oddCount > evenCount) {
            return firstTrigger + 1
        } else {
            return firstTrigger + 2
        }
    } else {
        if (oddCount > evenCount) {
            return firstTrigger
        } else {
            return firstTrigger + 1
        }
    }

    return firstIsOdd
}

function isOdd(value) {
    return Number(value) % 2 === 0;
}