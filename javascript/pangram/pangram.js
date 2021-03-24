/**
 * Alphabet to consider when checking if a string is a
 * pangram or not.
 * @type {string}
 * @private
 */
const __ALPHABET = "abcdefghijklmnopqrstuvwxyz";

/**
 * Checks whether a string is a pangram or not.
 * @param someString String to validate if pangram or not.
 * @returns {boolean} <code>true</code> if <code>someString</code> is a pangram
 *                    else returns <code>false</code>
 */
export const isPangram = (someString) => {
    someString = someString.split("")
        .filter((ch) => (/[a-zA-Z ]/).test(ch))     // remove any non-alphabetic chars, maintain spaces
        .map((ch) => ch.toLowerCase()).join("");    // return the lowercase version of the matched characters.

    return __ALPHABET.split("")
        .filter((ch) => someString.indexOf(ch) >= 0).length >= __ALPHABET.length;
};