
const s = 'leetcode'
var maxPower = function(s) {
    const sArr = s.split('')
    let largestCount = 1
    let currentCount = 1
    for (let k = 1; k < sArr.length; k++) {
        if (sArr[k] === sArr[k-1]) {
            currentCount++
            if (currentCount > largestCount) {
                largestCount = currentCount
            }
        } else {
            currentCount = 1
        }
    }
    return largestCount
}

console.log(maxPower(s))