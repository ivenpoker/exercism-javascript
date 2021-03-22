/**
 * Given a name, returns a string with the message
 * "One for <name>, one for me", if <name> is defined,
 * else it returns "One for you, one for me".
 */
export const twoFer = (name) => {
    return name ? `One for ${name}, one for me.` :
        `One for you, one for me.`;
};
