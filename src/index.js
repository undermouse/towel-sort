
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let flattenArr = [];
    if (matrix === undefined) {
        return [];
    } else if (matrix.length === 0) {
        return [];
    } else {
        flattenArr.push(...matrix[0]);
        for (let i = 1; i < matrix.length; i++) {
            if (i % 2 !== 0) {
                matrix[i].reverse()
                flattenArr.push(...matrix[i])
            } else {
                flattenArr.push(...matrix[i])
            }
        }
    }
    return flattenArr;
}