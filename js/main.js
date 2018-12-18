$( document ).ready(()=>{



  let doctorList = $('#resultados > ul > li')
  // let name = $(doctorList[0] > )
  // console.log(`name: ${doctorList[0]}`)
  // console.log(doctorList[0])
  console.log($('#resultados > ul > li:nth-of-type(1)')[0])
  console.log($('#resultados > ul > li:nth-of-type(1) > a > .descripcion')[0].innerText)
  console.log($('#resultados > ul > li:nth-of-type(1) > a > .direccion')[0].innerText)
  console.log($('#resultados > ul > li:nth-of-type(1) > a > .direccion')[1].innerText)
  console.log($('#resultados > ul > li:nth-of-type(1) > a > .direccion')[2].innerText)
  console.log($('#resultados > ul > li:nth-of-type(1) > a > .telefono')[0].innerText)
  
  console.log(doctorList.length)
  
  
   for (iteracion=0;iteracion<doctorList.length;iteracion++)  {
      
      let doctorObj = {
          name: $(`#resultados > ul > li:nth-of-type(${iteracion+1}) > a > .descripcion`)[0].innerText,
          workPlaces: $(`#resultados > ul > li:nth-of-type(${iteracion+1}) > a > .direccion`)[0].innerText,
          specialties: $(`#resultados > ul > li:nth-of-type(${iteracion+1}) > a > .direccion`)[1].innerText,
          plan: $(`#resultados > ul > li:nth-of-type(${iteracion+1}) > a > .direccion`)[2].innerText,
          phoneNumber: $(`#resultados > ul > li:nth-of-type(1) > a > .telefono`)[0].innerText
      }
  
      let doctorsito = {"name": "ABAD SOLARES, ANAIT", "workPlaces": "AGRARISMO NO. EXT.208 NO. INT.10-A, ESCANDON , 11800, CIUDAD DE MEXICO, MIGUEL HIDALGO", "specialties": "Cirugia Oncologica", "plan": "Omnia", "phoneNumber": "55 52739509 EXT()"}
  
      // console.log(doctorObj)
      fetch('http://localhost:8080/doctors/add/', {
          method: 'POST',
          body: JSON.stringify(doctorObj  ), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
  
  
      
  }


})
