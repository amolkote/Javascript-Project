 user ={
    userName: 'Amol',
    surname: 'Kote',
    cont_No: +91956155
}

function testObject(test){
   return (`object username is ${test.userName} and surname is ${test.surname} with cont no: ${test.cont_No}`)
}

console.log(testObject(user))


function akWithOperator(...val2){
return val2
}

console.log(akWithOperator(200,500,400))