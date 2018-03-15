import { swap } from './util'

export function selectSort(sortArray) {
    for (let i = 0; i < sortArray.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < sortArray.length; j++) {
            if (sortArray[j] < sortArray[minIndex]) {
                minIndex = j
            }
            if (minIndex !== i) {
                swap(sortArray, i, minIndex)
            }
        }
    }
    return sortArray
}