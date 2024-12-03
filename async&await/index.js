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
                .then(res => res.json())

        for (i = 0; i < data.length; i++) {
                let img = document.createElement("img");
                img.src = `${data[i].image}`
                console.log(img)
                document.body.append(img)
        }
        console.log(data);

        //       if(data.ok){
        //         const res=data.json()
        //         const finalData=res.then(res=>res)
        //         console.log(finalData);



        //       }else{

        //         console.error("not able to get the data cause of failed to fetch the api")

        //       }

}
getData()









