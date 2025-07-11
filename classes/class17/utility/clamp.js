/**
 *
 * @param {number} min
 * @param {number} max
 * @param {number} value
 */
const clamp = (min, max, value) => Math.min(max, Math.max(min, value));

export default clamp;
