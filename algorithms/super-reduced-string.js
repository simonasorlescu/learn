/*
    Shil has a string, SS, consisting of NN lowercase English letters.
    In one operation, he can delete any pair of adjacent letters with same value.
    For example, string "aabccaabcc" would become either "aabaab" or "bccbcc" after 11 operation.

    Shil wants to reduce SS as much as possible.
    To do this, he will repeat the above operation as many times as it can be performed.
    Help Shil out by finding and printing SS's non-reducible form!

    Note: If the final string is empty, print Empty String.
*/

function reduced(str) {
    var output;
    for (var i = 0, len = str.length; i < len; i++) {

        if (str[i] === str[i+1]) {
            output = str.slice(0, i) + str.slice(i+2, len);
        }
    }
    return output;
}

function recursive(input) {
    var output = reduced(input);
    if (input === output) {
        return output;
    } else {
        return recursive(output);
    }
}

var newStr = recursive('acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj');
if (newStr) console.log(newStr);
else console.log('Empty String');