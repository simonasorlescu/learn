/* The DNA strand is missing the pairing element.
    Take each character, get its pair, and return the results as a 2d array.
    Base pairs are a pair of AT and CG.
    Return the provided character as the first element in each array.
*/

function pairElement(str) {
    var arr = str.split(''),
        dna = 'CGAT',
        pairs = 'GCTA';

    return arr.map(function(val) {
        return [val, pairs[dna.indexOf(val)]];
    });
}

pairElement("CTCTA");
