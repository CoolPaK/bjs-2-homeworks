function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]); // решение   
}
module.exports = {
  compareArrays
}

function getUsersNamesInAgeRange(users, gender) {
  const mas = users.filter(el => el.gender === gender).map(el => el.age);

  const averageAge = mas.reduce((acc, item, index, arr) => {
    acc += item;
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0);

  return averageAge;
}

module.exports = {
  getUsersNamesInAgeRange
}