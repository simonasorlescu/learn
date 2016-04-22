/* Return the sum of all odd Fibonacci numbers up to
    and including the passed number if it is a Fibonacci number.
*/

function sumFibs(num) {

    var a = 1,
        b = 1,
        c,
        sum = 0;

    while (a <= num) {
        if (a % 2 === 1) {
            sum += a;
        }
        c = a + b;
        a = b;
        b = c;
    }

    return sum;
}

sumFibs(4000000);
