// Function homework


// 1)
// function test(firstName){
//     return `Salam hormetli ${firstName}`
// }


// console.log(
//     test("Aynur")
// );


// function func(eded){
//     if(typeof(eded)=="number"){

//         if(eded%2==0){
//             return true
            
//         }
//         else{
//             return false
            
//         }
//     }
//     else{
//         console.log("Zehmet olmasa string kimi deyil reqem kimi daxil edin");
        
//     }
// }

// 



// const info = createInfo('Cavad', 185, {model: 'Samsung', version: 'Galaxy'}, ['reading', 'coding', 'drawing'])
// console.log(info)
// {name: 'Cavad', height: '185', phone: {model: 'Samsung', version: 'Galaxy'}, hobbies: ['reading', 'coding', 'drawing']}


// function createInfo(name, height, phone, hobbies) {
//     return {
//       name: name,
//       height: height,
//       phone: {
//         model: phone.model,
//         version: phone.version,
//         year:phone.year
//       },
//       hobbies: hobbies
//     };
//   }
  
//   const info = createInfo('Cavad', 185, { model: 'Samsung', version: 'Galaxy',year:2024 }, ['reading', 'coding', 'drawing']);
//   console.log(info);
// =================================
// Verilən ədədin kubunu return edən arrow function hazırlayın.
//    let myFunction=(a)=>a**3
//    console.log(myFunction(3));
//    ##############################################################################

// ---------------------------------------------------------------------
//  function temperatur(faranheyt) {
//      return selsi= 100-(faranheyt-32)/1.8
//  }
//  console.log(temperatur(32));
 
// function temp(qaynama_temperaturu) {
//      function temperatur(faranheyt){
//          return selsi=(faranheyt-32)/1.8
//      }
//      return temperatur(qaynama_temperaturu)
//  }
//  console.log(temp(4));
//  console.log(temperatur(2));

// console.log(reverse_function("1453"));
// function reverse_function(eded){
    // debugger
//     if (typeof(eded)=="number"){

//         eded=eded.toString()
//         eded = eded.split('').reverse().join('');
//         return eded
//     }
//     else{
//         return `verdiyiniz ${eded } reqem deyil yada string kimi daxil etmisiniz`
//     }
// }


function test(student="Eli",age){
    return student+" "+ age
}


console.log(test(undefined,25));


