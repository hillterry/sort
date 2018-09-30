export function flatten(arr) {
    var output = [], index = 0;
    for (var arrIndex = 0; arrIndex < arr.length; arrIndex++) {
        var value = arr[arrIndex];
        if (Array.isArray(value)) {
            value = flatten(arr[arrIndex]);
            var rIndex = 0, length = value.length;
            // output.length += length;
            while (rIndex < length) {
                output[index++] = value[rIndex++]
            }
        } else {
            output[index++] = value
        }
    }
    return output
}