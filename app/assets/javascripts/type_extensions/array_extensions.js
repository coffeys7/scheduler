////////////////////////////////////////////////////////////////////////////////
//
// Array Extensions
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Determine whether or not an array contains a substring
 *
 * @param elem {*} - The element to search for
 * @returns {boolean}
 */
Array.prototype.contains = function(elem) {
    var target = this;
    return (target.indexOf(elem) > -1);
};