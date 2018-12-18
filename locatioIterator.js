const fs = require('fs')
const Hospital = require('./hospitals').model
const db = require('./db')
let addressesToLookOnDB = []

db.connect()


let promise = Hospital.find({}, (err,hospital)=>{
    let addressesToLook = []
    hospital.forEach((currentValue)=>{
        let address = currentValue.searchableAddress
        let id = currentValue.id
        addressesToLook.push({address,id})

        


    })
    console.log(addressesToLook);
    fs.writeFileSync('./addressesToLookOnDB.array',JSON.stringify(addressesToLook))
    return (addressesToLook)
    // console.log(ids[0])
    // Hospital.findById(ids[0], (err, doc)=>{
    //     doc.searchableAddress = "corta"
    //     doc.save()
    // } )
})

promise.then((idAddressArray)=>{
    // console.log(idAddressArray) 
    // fs.writeFileSync('./addressesToLookOnDB.array',addressesToLookOnDB)
    // console.log(addressesToLookOnDB);
  
    
})



//let addressesToLook = ['avenida jardin 257','villaongin 92 cuauhtemoc','medanos de coro']


  //start();