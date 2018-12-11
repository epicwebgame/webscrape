const fs = require('fs')
const getCoordinates = require('./get_position_nightmare')


let addressesToLook = JSON.parse(fs.readFileSync('addressesToLookOnDB.array','utf8'))
console.log(addressesToLook.length);

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      console.log("iteracion "+index+" de "+array.length)
      await callback(array[index], index, array);
    }
  }
  
  const start = async () => {
    await asyncForEach(addressesToLook, async (num) => {
      await getCoordinates(num);
    });
    console.log('Done');
    throw new Error("Something went badly wrong!");

    return nightmare.end()
  }
  
  // start();

  let testArray = []

  testArray.push({key:123})

  console.log(testArray)