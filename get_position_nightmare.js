const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true ,height:768,width:1366})
const fs = require('fs')

// let addressesToLook = ['avenida jardin 257','villaongin 92 cuauhtemoc','medanos de coro']


async function getCoordinates(obj){

   await nightmare
  .goto('https://www.gps-coordinates.net/')
  .wait('#address')
  .scrollTo(700,0)
  .wait(2000)
  .type('#address')
  .insert('#address', obj.address)
  .wait(2000)
  .click(':nth-child(2) > .col-md-offset-3 > .btn')
  .wait(2000)
  .evaluate(() => {
    let latitude = document.getElementById('latitude').value
    let longitude = document.getElementById('longitude').value
    let position = {latitude,longitude}
    // let id = obj.id
    return (position)
  })
  .then(function(table){
    let id = obj.id
    let completeObj = Object.assign({id}, table)
    fs.appendFileSync('idAndLocation.array',JSON.stringify(completeObj)+',')
    return(completeObj)
      // console.log(table)
      // console.log(id)
  })
  .catch(error => {
    console.error('Search failed:', error)
  })



}

function closeWindow() {
  console.log('intente cerrar ventana')
  nightmare.end()
}



// addressToLook.forEach(async (currentValue)=>{
//   await getCoordinates(currentValue)
// })

module.exports  = {getCoordinates,closeWindow}

