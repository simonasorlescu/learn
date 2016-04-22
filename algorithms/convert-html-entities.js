/* Convert the characters &, <, >, " (double quote), and ' (apostrophe),
    in a string to their corresponding HTML entities.
 */

function convertHTML(str) {

    var chars = ['&', '<', '>', '"', "'"],
        entities = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];

    for (var i = 0, len = chars.length; i < len; i++) {
        var re = new RegExp(chars[i], 'g');
        str = str.replace(re, entities[i]);
    }

    return str;
}

convertHTML("Hamburgers < Pizza < Tacos");
