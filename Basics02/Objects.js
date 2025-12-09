// Singlton objects
  let singleOject = new Object();

  // or
  //Object.create();

  // Literal object
  let testobject ={}

 console.log(testobject)

 let obj1 ={name:'amol',surname:'kote'}
 let obj2 = {son:'Arsh', spouse:'Arti'}

 let obj3 ={...obj1,...obj2}
  console.log('obj1+ obj2 =obj3 final result', obj3)

  console.log('Object kesy obj1 :',Object.keys(obj1))
  console.log('Object values obj1 :',Object.values(obj1))
    console.log('Object entires obj1 :',Object.entries(obj1))


