const {getCoordinates} = require('./get_position_nightmare')
const fs = require('fs')

let addressesToLook = JSON.parse(fs.readFileSync('addressesToLookOnDB_short.array','utf8'))
// let addressesToLook = [{"address":"EUGENIO SUE NO.355 INT. 400 COL. CHAPULTEPEC MORALES, MIGUEL HIDALGO C.P. 11570 CDMX. ","id":"5bfd85136004132880c3b8ee"},{"address":"TIERRA Y LIBERTAD  NO.34  COL. SAN LORENZO LA CEBADA, XOCHIMILCO C.P. 16035 CDMX. ","id":"5bfd85126004132880c3b8e0"},{"address":"EUGENIO SUE NO.355 INT. 400 COL. CHAPULTEPEC MORALES, MIGUEL HIDALGO C.P. 11570 CDMX. ","id":"5bfd85136004132880c3b8ed"}]

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      console.log("iteracion "+(index+1)+" de "+array.length)
      await callback(array[index], index, array);
    }
  }
  
  const start = async () => {
    await asyncForEach(addressesToLook, async (num) => {
      await getCoordinates(num);
    });
    console.log('Done');
    // throw new Error("Something went badly wrong!");

    // closeWindow()
  }
  
  start();
