const randomNumber = () => Math.floor(Math.random() * 100) + 500;

const dynamicsort = (property, order) => {
  // use either asc or desc
  let sortOrder = 1;
  if (order === 'desc') {
    sortOrder = -1;
  }
  return (a, b) => {
    // a should come before b in the sorted order
    if (a[property] < b[property]) {
      return -1 * sortOrder;
      // a should come after b in the sorted order
    }
    if (a[property] > b[property]) {
      return 1 * sortOrder;
      // a and b are the same
    }
    return 0 * sortOrder;
  };
};

export { dynamicsort, randomNumber };