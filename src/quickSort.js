function _paritition(arr, low, high) {
    let pivot = arr[low];
    while (low < high) {
        while (low < high && arr[high] > pivot) {
            --high;
        }
        arr[low] = arr[high];
        while (low < high && arr[low] <= pivot) {
            ++low;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}

export function quickSort(arr, low, high) {
    if (low < high) {
        let pivot = _paritition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
}
