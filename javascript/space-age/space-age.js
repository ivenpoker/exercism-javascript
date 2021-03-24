const EARTH_SECS = 31_557_600;
const EARTH_DAYS = 365.25;
const EARTH_ORBITAL_PERIOD = 1.0;

const PLANET_ORBITAL_PERIOD = {
    mercury: 0.2408467 * EARTH_ORBITAL_PERIOD,
    venus: 0.61519726 * EARTH_ORBITAL_PERIOD,
    earth: EARTH_ORBITAL_PERIOD,
    mars: 1.8808158 * EARTH_ORBITAL_PERIOD,
    jupiter: 11.862615 * EARTH_ORBITAL_PERIOD,
    saturn: 29.447498 * EARTH_ORBITAL_PERIOD,
    uranus: 84.016846 * EARTH_ORBITAL_PERIOD,
    neptune: 164.79132 * EARTH_ORBITAL_PERIOD
};

/**
 * Given an age in seconds, compute how old someone would be on distinguished
 * planets.
 * @param args Array of arguments. First being the name of the planet and second the number of seconds.
 * @returns {number} Age on planet (using earth years as reference).
 */
export const age = (...args) => {
    const result = (((args[1] / EARTH_SECS) * EARTH_DAYS) / EARTH_DAYS) / PLANET_ORBITAL_PERIOD[args[0].toLowerCase()];
    return Number.parseFloat(result.toFixed(2));
};
