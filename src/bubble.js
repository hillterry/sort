export function bubbleSort(sortArray) {
    for (let i = 0; i < sortArray.length - 1; i++) {
        for (let j = sortArray.length - 1; j > 0; j--) {
            if (sortArray[j] < sortArray[j - 1]) {
                _swap(sortArray, j, j - 1)
            }
        }
    }
    return sortArray
}

function _swap(arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}