// Sort an unsorted array using Insertion sort.

function sort(arr) {
    for (var i = 1, len = arr.length; i < len; i++) {
        var j = i;

        while (j > 0 && arr[j-1] > arr[j]) {
           swap(arr, j);
           j--;
        }

    }
    return arr.join(' ');
}

// Swaps two elements in adjacent positions.
function swap(arr, j) {
    var temp = arr[j-1];
    arr[j-1] = arr[j];
    arr[j] = temp;
}

sort([9, 8, 6, 7, 3, 5, 4, 1, 2]);