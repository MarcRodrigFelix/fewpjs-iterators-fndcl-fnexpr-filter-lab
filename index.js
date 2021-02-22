// Code your solution here


function findMatching(driversArray, string){
  const matchingDrivers = driversArray.filter( driver => {
    return driver.toLowerCase() === string.toLowerCase()
  })

  return matchingDrivers.length > 0 ? matchingDrivers : [];
};



function fuzzyMatch(driversArray, string){
  const matchingDrivers = driversArray.filter( driver => {
    return driver.toLowerCase()[0] === string.toLowerCase()[0]
  })

  return matchingDrivers;
};



function matchName(driversArray, string){
  const matchingDrivers = driversArray.filter( driver => {
    return driver.name.toLowerCase() === string.toLowerCase()
  })

  return matchingDrivers;
};
