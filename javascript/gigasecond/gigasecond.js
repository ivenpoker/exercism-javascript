/**
 * Giga Seconds
 * @type {number}
 */
const GIGA_SECOND = 1000000000;

/**
 * Determines the moment that would be after a giga second has
 * passed.
 * @param someDate Some date (moment)
 * @returns {Date} New moment (date) after a giga second has passed.
 */
export const gigasecond = (someDate) => {
    const newDate = new Date(someDate);
    newDate.setUTCSeconds(newDate.getUTCSeconds() + GIGA_SECOND);
    return newDate;
};
