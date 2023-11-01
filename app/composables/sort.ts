export function sortArrayByProperty(array, property, ascending = true) {
  const compareFunction = (a, b) => {
    // Use the `localeCompare` method to compare strings
    if (typeof a[property] === 'string' || typeof b[property] === 'string') {
      return ascending
        ? a[property].localeCompare(b[property])
        : b[property].localeCompare(a[property]);
    }

    // For numerical or non-string properties
    if (ascending) {
      return a[property] - b[property];
    } else {
      return b[property] - a[property];
    }
  };

  // Create a copy of the array to avoid modifying the original array
  const sortedArray = [...array];

  return sortedArray.sort(compareFunction);
}
