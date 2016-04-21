/* Perform a search and replace on the sentence using the arguments provided
    and return the new sentence.

    NOTE: Preserve the case of the original word when you are replacing it.
 */

function myReplace(str, before, after) {

  var firstChar = before[0];

  if (firstChar === firstChar.toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");
