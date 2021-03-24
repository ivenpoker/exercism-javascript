/**
 * Nucleotide mappings for DNA and RNA.
 * @type {{A: string, C: string, T: string, G: string}}
 */
const NUCLEOTIDE_MAP = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
};

/**
 * Map a DNA strand to the equivalent RNA strand compliment.
 * @param dnaStrand DNA strand to map
 * @returns {*} RNA compliment to the DNA strand.
 */
export const toRna = (dnaStrand) => dnaStrand ? dnaStrand.trim().split("").reduce((acc, val) =>
    `${acc}${NUCLEOTIDE_MAP[val]}`, "") : "";
