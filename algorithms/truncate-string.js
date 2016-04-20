/* Truncate a string if it is longer than the given maximum string length.
    If the given maximum string length is greater than 3,
    inserting the three dots to the end will add to the string length.
*/
function truncateString(str, num) {
    var len = str.length;

    if (str.length > num) {
        if (num <= 3) {
            return str.slice(0, num) + '...';
        } else {
            return str.slice(0, num-3) + '...';
        }
    } else {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
