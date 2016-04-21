/* Given a time in AM/PM format, convert it to military (24-hour) time.
    Input format - type string: hh:mm:ssAM or hh:mm:ssPM
*/
function convertTime(time) {
    var hours = time.substr(0,2),
        minutes = time.substr(3,2),
        seconds = time.substr(6,2),
        meridian = time.substr(-2);

    if (meridian === 'PM') {
        if (hours !== '12') {
            hours = parseInt(hours) + 12 + '';
        }
    } else if (hours === '12') {
        hours = '00';
    }

    return hours + ':' + minutes + ':' + seconds;
}

convertTime('07:05:45PM');