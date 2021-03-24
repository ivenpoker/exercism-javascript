/**
 * Map of color names to their respective color codes.
 * @type {{red: number, orange: number, green: number, blue: number, white: number,
 *         black: number, yellow: number, violet: number, brown: number, grey: number}}
 */
const COLOR_MAP = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
};

/**
 * Return color code from given color name
 * @param colorName Color name to retrieve color code
 * @returns {*}
 */
const getColorCode = (colorName) => COLOR_MAP[colorName.toLowerCase()];

/**
 * Decodes the first two string color names of the passed array.
 * @param fstColor First color
 * @param sndColor Second color
 * @returns {number}
 */
export const decodedValue = ([fstColor, sndColor]) => {
    return Number.parseInt(`${getColorCode(fstColor)}${getColorCode(sndColor)}`);
};
