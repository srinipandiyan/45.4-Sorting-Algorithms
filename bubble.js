function bubbleSort(arr) {
    let length = arr.length
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                //swaps elements if preceeding term is larger
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;