// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
    // Replace uppercase character with '-' + lowercase correspondent
    return str.replace(/[A-Z]/g, function(match, offset, string) {
        if (match === string[0])
            return match.toLowerCase();
        else
            return '-' + match.toLowerCase();
        })
    .replace(/[\W_]+/g, '-');
}

spinalCase('AllThe-small Things');
