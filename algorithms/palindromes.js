function palindrome(str) {

    // Remove all non-alphanumeric characters
    var newStr = str.replace(/[\W_]+/g, '').toLowerCase();

    // Check if palindrome
    for (var i = 0, len = newStr.length; i < len; i++) {
        if (newStr[i] !== newStr[len - i - 1]) {
            return false;
        }
    }
    return true;
}

palindrome("A man, a plan, a canal. Panama");
