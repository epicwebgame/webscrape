const Nightmare = require('nightmare')
const nightmare = Nightmare({
  show: true
})
const $ = require('cheerio')
const Hospital = require('./hospitals').model
const db = require('./db')
db.connect()




nightmare
  .goto('http://www.planseguro.com.mx:88/directorio_consulta.php?t=h')
  .select('#estado', 'MEXICO')
  .click('#buttonSearch').wait(6000)
  .evaluate(function () {
    return document.querySelector('#tableResult').outerHTML
  })
  .end()
  .then(function (table) {
    let row = 1
    let col = 2
    console.log("procesando " + $('tbody > tr', table).length + " registros")
    // console.log($(`tbody > tr:nth-of-type(${row}) > td:nth-of-type(${col})`, table).text())
    for (let row = 0; row < 348; row++) {
      let obj = {
        name: $(`tbody > tr:nth-of-type(${row+1}) > td:nth-of-type(2)`, table).text(),
        plan: $(`tbody > tr:nth-of-type(${row+1}) > td:nth-of-type(3)`, table).text(),
        address: $(`tbody > tr:nth-of-type(${row+1}) > td:nth-of-type(4)`, table).text()
      }
      let NewHospital = new Hospital(obj)
      NewHospital.save()
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
  });


// NewHospital.save()

// async function crearHospital () {
// const  hospitalCreated = await NewHospital.save()
// console.log(hospitalCreated)
// }

// crearHospital()