function merge(arr, first, mid, last, temp) {
    let firstIndex = first, firstLast = mid, secondIndex = mid + 1, secondLast = last, tempIndex = 0

    while (firstIndex <= firstLast && secondIndex <= secondLast) {
        if (arr[firstIndex] < arr[secondIndex]) {
            temp[tempIndex++] = arr[firstIndex++]
        } else {
            temp[tempIndex++] = arr[secondIndex++]
        }
    }
    while (firstIndex <= firstLast) {
        temp[tempIndex++] = arr[firstIndex++]
    }
    while (secondIndex <= secondLast) {
        temp[tempIndex++] = arr[secondIndex++]
    }
    for (let index = 0; index < tempIndex; index++) {
        arr[first + index] = temp[index]
    }
}

export function mergeSort(arr, first, last, temp) {
    if (first < last) {
        let mid = Math.floor((first + last) / 2)
        mergeSort(arr, first, mid, temp)
        mergeSort(arr, mid + 1, last, temp)
        merge(arr, first, mid, last, temp)
    }
    return arr
}