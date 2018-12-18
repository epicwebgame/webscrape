const Hospital = require('./hospitals').model
const db = require('./db')
db.connect()

Hospital.find({},(err,hospital)=>{
    // let ids = []
    hospital.forEach((currentValue)=>{
        currentValue.searchableAddress = currentValue.address.split('Tel')[0]
        currentValue.save()

        


    })
    // console.log(ids[0])
    // Hospital.findById(ids[0], (err, doc)=>{
    //     doc.searchableAddress = "corta"
    //     doc.save()
    // } )
})


