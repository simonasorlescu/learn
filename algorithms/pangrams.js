/* Given a sentence s, check if it is a pangram or not.
    Lower-case and upper-case instances of a letter are considered the same.
*/

function pangram(sentence) {

    var az = 'abcdefghijklmnopqrstuvwxyz';

    for (var i = 0; i < az.length; i++) {
        if (sentence.toLowerCase().indexOf(az[i]) === -1) {
            console.log('not pangram');
            return;
        }
    }
    console.log('pangram');
}

pangram('We promptly judged antique ivory buckles for the next prize');