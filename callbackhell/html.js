// // // // function a(z){
// // // //     console.log("vamsi");
// // // //     // console.log(z);
// // // //     z()
// // // // }
// // // // a(function b(){
// // // //     console.log("k");
// // // // })

// // // console.log("start");
// // // console.log("going on");

// // // setTimeout(()=>{
// // //    console.log("vamsi");
// // // },3000)

// // // setTimeout(()=>{
// // //     console.log("ravi");
// // //  },5000)

// // // console.log("end here");



// // setTimeout(()=>{
// //     console.log("vamsi2");
// // },2000)

// // setTimeout(()=>{
// //     console.log("vamsi4");
// // },4000)


// // setTimeout(()=>{
// //     console.log("vamsi6");
// // },6000)


// // setTimeout(()=>{
// //     console.log("vamsi8");
// // },8000)




// function orderPlaced() {
//     console.log("order placed!!");
//     function shiiping() {
//         console.log("order shipped");
//         function deliveryPatner() {
//             console.log("delievery partner picked up your order will eliver very soon");
//             function delivered() {
//                 console.log("order delivered!!!");
//             }
//             delivered()
//         }
//         deliveryPatner()
//     }
//     shiiping()

// }
// orderPlaced()


setTimeout(() => {
    alert("order placed");
    setTimeout(() => {
        alert("shiiped and will reach within 10 days")
        setTimeout(() => {
            alert("reached nearesr hub")
            setTimeout(() => {
                alert("picked by delievery partner and on the road")
                setTimeout(() => {
                    alert("order recieved!!!!!!")
                }, 1000)
            }, 2000)
        }, 2000)
    }, 1000 * 60)
}, 500)