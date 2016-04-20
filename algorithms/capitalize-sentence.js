// Title case a sentence
function titleCase(str) {
    var arr = str.split(' ');

    var capitalizedArr = arr.map(function(item) {
        // Convert first character to uppercase and add the rest of the string
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    });

    // Return the string with the first letter of each word capitalized
    return capitalizedArr.join(' ');
}

titleCase("sHoRt AnD sToUt");
