/**
 * Map of colors to respective values.
 * @type {{red: number, orange: number, green: number, blue: number,
 *              white: number, black: number, yellow: number,
 *              violet: number, brown: number, grey: number}}
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
 * Retrieve color code from color name
 * @param colorName Name of color to retrieve respective color code
 * @returns {*} Integer color code for specified color.
 */
export const colorCode = (colorName) => {
    return COLOR_MAP[colorName.toLowerCase()];
};

/**
 * String array of respective color names (all in lowercase)
 * @type {string[]}
 */
export const COLORS = Object.keys(COLOR_MAP).map((color) => color.toLowerCase());