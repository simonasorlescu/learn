/* A Discrete Mathematics professor has a class of N students.
    Frustrated with their lack of discipline,
    he decides to cancel class if fewer than K students are present when class starts.
    Given the arrival time of each student, determine if the class is canceled.
    Print the word YES if the class is canceled or NO if it is not.

    Non-positive arrival times indicate the student arrived early or on time;
    positive arrival times indicate the student arrived late.
*/

function canceledClass(n, k, arr) {

    var in_time = arr.filter(time => time <= 0)

    if (in_time.length < k) console.log('YES');
    else console.log('NO');

}

canceledClass(4, 3, [-1, -3, 4, 2]);