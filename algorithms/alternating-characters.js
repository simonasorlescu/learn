/* Shashank likes strings in which consecutive characters are different.
    For example, he likes ABABA, while he doesn't like ABAA.
    Given a string containing characters AA and BB only,
    he wants to change it into a string he likes.
    To do this, he is allowed to delete the characters in the string.

    Find the minimum number of required deletions.
*/

function countDeletions(str) {
    var count = 0;

    for (var i = 0, len = str.length; i < len; i++) {
        // Check if duplicate characters
        if (str[i] === str[i+1]) {
            count++;
        }
    }

    return count;
}

countDeletions('AAABBB');