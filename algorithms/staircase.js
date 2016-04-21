/* Print a staircase of height N that consists of "#" symbols and spaces.
    For example for N=6, here's a staircase of that height:
         #
        ##
       ###
      ####
     #####
    ######
 */

function staircase(n) {
    var stair = '',
        staircase = [];

    for (i = 1; i <= n; i++) {
        console.log(' '.repeat(n-i) + '#'.repeat(i));
    }
}

staircase(10);