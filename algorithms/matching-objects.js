/* Make a function that looks through an array of objects (first argument)
    and returns an array of all objects that have matching property and value pairs
    (second argument). Each property and value pair of the source object
    has to be present in the object from the collection if it is to be included
    in the returned array.
*/

function whereAreYou(collection, source) {

    var arr = collection.filter(function(obj) {
        var keys = Object.keys(source),
            hasKey,
            ownProps = 0;

        for (var i = 0; i < keys.length; i++) {
            if (obj.hasOwnProperty(keys[i]) && obj[keys[i]] === source[keys[i]]) {
                ownProps++;
            }
        }

        if (ownProps === keys.length) {
            return obj;
        }
    });

    return arr;
}

whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });