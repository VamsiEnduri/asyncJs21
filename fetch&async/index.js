// const fetchData=new Promise((x,y)=>{

//     const data=fetch("https://fakestoreapi.com/products")
//     console.log(data)
//     .then(res=>console.log(res.json()))
//     .then(res=>console.log(res))


// })
// fetchData.then(res=>console.log(res)).catch(err=>console.log(err))


// function dataFake(){
//     return new Promise((x,y)=>{
//         fetch("https://fakestoreapi.com/products")
//          .then((res)=>{
//              if(!res.ok){
//                 y(`error detected in fetching the data with ${res.status} and with ${res.statusText}`)
//              }
//              return res.json();
//          })
//          .then(res=>x(res)) 
//          .catch(err=>{
//              console.log(err)
//          })
//      })
// }
// dataFake().then(res=>{
//     console.log(res);
//     res.forEach(item=>{
//         let card=document.createElement("div");
//     card.innerHTML=`
//     <img src="${item.image}"/>
//     `
//     document.body.append(card)
//     })
// }).catch(err=>console.log(err))


// async function vamsi() {
//     let a = await new Promise((x, y) => {
//         setTimeout(() => {
//             var b = "vamsi"
//             x(b)
//         }, 2000);
//     })
//     console.log(a);
// }
// vamsi()

// async function  getData() {
//     try{
//         let data=await fetch("https://fakestoreapi.com/products");
//  if(!data.ok){
//     console.log(`${data.statusText} with ${data.status} `)
//  }
// else{
//     let res=await data.json();
//     console.log(res)
// }
//     }catch(err){
//         console.log(err)
//     }
// }
// getData()