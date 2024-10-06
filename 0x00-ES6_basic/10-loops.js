export default function appendToEachArrayValue(array, appendString) {
  for (const element of array) {
    const idx = array.indexOf(element);
    /* eslint-disable-next-line no-param-reassign */
    array[idx] = appendString + element;
  }

  return array;
}
