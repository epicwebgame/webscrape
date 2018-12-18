const fs = require('fs')
const Hospital = require('./hospitals').model
const db = require('./db')

db.connect().then(()=>{


    let  idAndLocationArray = JSON.parse(fs.readFileSync('idAndLocation.de348PlanSeguro.array','utf8'))
    console.log(idAndLocationArray.length);

        idAndLocationArray
        .forEach(element => {
            Hospital.findById(element.id,(error,hospital)=>{
                hospital.position.latitude = element.latitude
                hospital.position.longitude = element.longitude
                hospital.save()
            })


        });

})



// Hospital.find({},(err,hospital)=>{
//     // let ids = []
//     hospital.forEach((currentValue)=>{
//         currentValue.searchableAddress = currentValue.address.split('Tel')[0]
//         currentValue.save()

        


//     })
//     // console.log(ids[0])
//     // Hospital.findById(ids[0], (err, doc)=>{
//     //     doc.searchableAddress = "corta"
//     //     doc.save()
//     // } )
// })


