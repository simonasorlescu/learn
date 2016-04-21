/* Make a function that looks through an array of objects (first argument)
    and returns an array of all objects that have matching property and value pairs
    (second argument). Each property and value pair of the source object
    has to be present in the object from the collection if it is to be included
    in the returned array.
*/

function whereAreYou(collection, source) {

    return collection.filter(function(obj) {
        // Create array of source keys
        var keys = Object.keys(source);

        // Return array of objects that match every element in "keys"
        return keys.every(function(value) {
            return obj[value] === source[value];
        });

    });
}

whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });