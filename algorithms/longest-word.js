// Find the longest word in a string
function findLongestWord(str) {

    var arr = str.split(' '),
        currentLength,
        maxLength = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
        currentLength = arr[i].length;

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
