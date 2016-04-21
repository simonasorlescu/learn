/* Bob sees his younger brother, Jack, playing Stepping Stones.
    He is fascinated by the most interesting game and decides to play it.

    Square boxes have been made on the ground with the help of chalk powder,
    and a number is assigned to each block.
    Bob is standing in front of these blocks.
    From here, he will throw a stone 1 block far, move to that block;
    pick up the stone and then he will throw the stone two blocks far from here,
    move to that block; pick up the stone,
    and throw the stone three blocks far from here, move to that block, and so on.

    Check if it is possible to reach Nth block in this manner.
 */

function steppingStones(n) {
    var m = Math.sqrt(8 * n + 1); // triangular number formula

    if (Math.floor(m) === Math.ceil(m))
        console.log('Go On Bob ' + (m-1)/2); // the number of moves required to reach to the Nth block
    else console.log("Better Luck Next Time");
}

steppingStones(15);