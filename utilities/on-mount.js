/**
 * @param {() => void} fn
 */
const onMount = fn => {
  setTimeout(fn, 1);
};

export default onMount;
