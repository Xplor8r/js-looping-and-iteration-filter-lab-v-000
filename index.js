// Code your solution in this file
function findMatching (list, name) {
  return list.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (list, includes) {
  let length = includes.length;
  return list.filter(function (driver) {
    return driver.slice(0, length) === includes;
  });
}

function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
