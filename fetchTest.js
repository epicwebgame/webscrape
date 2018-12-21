const fetch = require('node-fetch');
const db = require('./db')

//Importacion de Schemas
const Doctor = require('./Doctors').model
db.connect()


async function getDistincAddresses () {
let array = await fetch('http://localhost:8080/hospitals/distincAddresses').then(res=>res.json()).catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);

  })

  console.log(array.length)
}

async function getDistincLocations () {
    let array = await fetch('http://localhost:8080/hospitals/distincLocations').then(res=>res.json()).catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    
      })
    
      Doctor.find({},(err,allDoctors)=>{
        // let ids = []
        allDoctors.forEach((currentValue)=>{
            let number = Math.floor(Math.random() * 94)
            currentValue.workPlaces = array[number]
            currentValue.save()
    
            
    
    
        })
        // console.log(ids[0])
        // Hospital.findById(ids[0], (err, doc)=>{
        //     doc.searchableAddress = "corta"
        //     doc.save()
        // } )
    })
      

      console.log(array)
    }


    getDistincLocations()

