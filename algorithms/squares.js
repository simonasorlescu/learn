// Count the number of square integers between two integers A and B (both inclusive).

function countSquares(a, b) {

    var first = Math.ceil(Math.sqrt(a)),
        last = Math.floor(Math.sqrt(b));

    return last - first + 1;
}

countSquares(5, 80);