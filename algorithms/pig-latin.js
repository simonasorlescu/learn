/* Translate the provided string to pig latin.
    Pig Latin takes the first consonant (or consonant cluster) of an English word,
    moves it to the end of the word and suffixes an "ay".
    If a word begins with a vowel you just add "way" to the end.
 */

function translatePigLatin(str) {
    var vocals = 'aeiou',
        consonants = '';

    for (var i = 0, len = str.length; i < len; i++) {
        // Get first consonants
        if (vocals.indexOf(str[i]) === -1) {
            consonants += str[i];
        } else {
            break;
        }
    }

    if (consonants) {
        return str.substr(consonants.length) + str.substr(0, consonants.length) + 'ay';
    } else {
        return str + 'way';
    }
}

translatePigLatin("glove");
