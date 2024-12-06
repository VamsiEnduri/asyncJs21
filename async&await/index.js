// var ticketBooking=new Promise((resolve,reject)=>{
//           if(1){
//             resolve("im fine ")
//           }else{
//             reject("im not  good")
//           }
// })
// ticketBooking.then(x=>console.log(x)).catch(y=>console.log(y))


// var getData=new Promise((resolve,reject)=>{
//          fetch("https://fakestoreapi.com/products").then(y=>y.json()).then(res=>console.log(res)).
//         catch(err=>console.log(err))
//         // console.log(api)

// })
// getData.then(x=>console.log(x)).catch(y=>console.log(y))



// function getData(){
//    new Promise((resolve,reject)=>{
//                 fetch("https://fakestoreapi.com/products").then(y=>y.json()).then(res=>console.log(res)).
//                catch(err=>console.log(err))
//                // console.log(api)
//        })

//        console.log("sdfghjkl;");
//        console.log(12345678);


// //        getData.then(x=>console.log(x)).catch(y=>console.log(y))
// }
// getData()


// async function getData(){
//         let a=await new Promise((x,y)=>{
//                 setTimeout(()=>{
//                         x("logged after 5 sec")
//                 },5000)
//         })
//         console.log(a);
//         console.log("rakesh");
// }
// getData()
async function getData() {
        const data = await fetch("https://fakestoreapi.com/products")
                .then(res => res)

        // for (i = 0; i < data.length; i++) {
        //         let img = document.createElement("img");
        //         img.src = `${data[i].image}`
        //         console.log(img)
        //         document.body.append(img)
        // }

        if (data.ok) {
                const res =await  data.json();
                console.log(res);
                

                for (i = 0; i < res.length; i++) {
                        let img = document.createElement("img");
                        img.src = `${res[i].image}`
                        // console.log(img)
                        document.body.append(img)
                }

        }
        // console.log(data);
}
getData()









