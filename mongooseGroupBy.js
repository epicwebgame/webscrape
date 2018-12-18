// El proposito de este script sera el de simular el funcionamiento del Group By de SQL para ello se iteraran todos los elementos de la base de datos y se actualizara un solo objeto en sus campos de propiedades a la vez que se incrementa un contador en uno en esa propiedad

const db = require('./db')
const Doctor = require('./Doctors').model
const fs = require('fs')

let groupByObj = {}

db.connect()

Doctor.find().distinct('specialties',(error, specialties)=>{
    console.log(specialties)
})

console.log(
 db.doctors.aggregate([
    {$match:{}},
    {$group: {_id: "$specialties", count:{$sum:"$name" }} }
])
);

