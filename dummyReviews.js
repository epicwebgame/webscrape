const db = require('./db')
//Importacion de Schemas
const Doctor = require('./Doctors').model
db.connect()

Doctor.find({},(err,doctors)=>{
    // let ids = []
    doctors.forEach((currentValue)=>{
        currentValue.qualification.stars = Math.floor(Math.random() * (6 -3)) + 3
        currentValue.qualification.count = Math.floor(Math.random() * 50) + 1
        currentValue.save()

        


    })
    // console.log(ids[0])
    // Hospital.findById(ids[0], (err, doc)=>{
    //     doc.searchableAddress = "corta"
    //     doc.save()
    // } )
})