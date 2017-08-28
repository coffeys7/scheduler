////////////////////////////////////////////////////////////////////////////////
//
// String Extensions
//
////////////////////////////////////////////////////////////////////////////////

/**
 * Replace all occurrences of a string within a string
 *
 * @param search {String}
 * @param replacement {String}
 *
 * @returns {string}
 */
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

/**
 * Remove all commas from a string
 *
 * @returns {string}
 */
String.prototype.removeCommas = function() {
    var target = this;
    return target.replaceAll(",", "");
};

/**
 * Determine whether or not a string contains a substring
 *
 * @param s {String} - The string to search for
 * @returns {boolean}
 */
String.prototype.contains = function(s) {
    var target = this;
    return (target.indexOf(s) > -1);
};