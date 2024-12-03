// // // setTimeout(()=>{
// // //   alert("order placed!!!")
// // // },2000)


// // // setTimeout(()=>{
// // //     alert("order delivereed!!!")
// // //   },0)


// // // class Vamsi{
// //     // constructor Vamsi(){

// //     // }
// // // }


// // class Promise{
// //     constructor  (){

// //     }
// // }

// // const a= new Promise()
// // console.log(a);


// // // function Vamsi(x,y){
// // //  console.log(x+y);

// // // }
// // // Vamsi("vamsi","ravi")



// // var z=new Promise((resolve,reject)=>{
// //         if(resolve){
// //             console.log("hello");

// //         }else{
// //             console.log("bye")
// //         }
// // });
// // console.log(z);




// // var z=new Promise((resolve,reject)=>{
// //     if(1){
// //         reject("hello");

// //     }else{
// //         resolve("bye")
// //     }
// // });
// // console.log(z);


var a = new Promise((x, y) => {
    if (1) {
        x("prodcut ordered !!!")
    } else {
        y("reject")
    }
})


var b = new Promise((x, y) => {
    if (1) {
        x("shiiped")
    } else {
        y("reject")
    }
})


var c = new Promise((x, y) => {
    if (1) {
        x("delivery partner")
    } else {
        y("reject")
    }
})



var d = new Promise((x, y) => {
    if (1) {
        y("order received!!!!")
    } else {
        x("reject")
    }
})


// a.then((res) => {
//     console.log(res);
//     return b.then((res) => {
//         console.log(res);
//         return c.then((res) => {
//             console.log(res);
//             return d.then(res => {
//                 console.log(res)
//             })
//         })
//     })
// })


a.then((res)=>{
  console.log(res)
  return b;
}).then((res)=>{
  console.log(res);
  return c;
}).then(res=>{
  console.log(res);
  return d;
}).then(res=>{
  console.log(res)
})
.catch(err => {
    console.log(err)
})




// location.reload()
// function checkDeviceAccess() {
//     const form = document.getElementById('job-application');
//     const warning = document.getElementById('warning');

//     if (window.innerWidth >= 1024) {

//       form.style.display = 'block';
//       warning.style.display = 'none';
//     } else {
//       form.style.display = 'none';
//       warning.style.display = 'block';
//     }
//   }


//   checkDeviceAccess();


//   window.addEventListener('resize', checkDeviceAccess);



