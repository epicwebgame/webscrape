const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true ,height:768,width:1366})

let addressesToLook = ['avenida jardin 257','villaongin 92 cuauhtemoc','medanos de coro']


async function getCoordinates(addressText){

   await nightmare
  .goto('https://www.gps-coordinates.net/')
  .wait('#address')
  .scrollTo(700,0)
  .wait(2000)
  .type('#address')
  .insert('#address', addressText)
  .wait(2000)
  .click(':nth-child(2) > .col-md-offset-3 > .btn')
  .wait(2000)
  .evaluate(() => {
    let latitude = document.getElementById('latitude').value
    let longitude = document.getElementById('longitude').value
    let position = {latitude,longitude}
    return (position)
  })
  .then(function(table){
      console.log(table)
  })
  .catch(error => {
    console.error('Search failed:', error)
  })



}

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
  return nightmare.end()
}

start();


// addressToLook.forEach(async (currentValue)=>{
//   await getCoordinates(currentValue)
// })

// module.exports  = getCoordinates

