// npm install -g json-server

let url = "http://localhost:3000/electronics";


let btnElectronics=document.getElementById("electronics");
btnElectronics.addEventListener("click",async ()=> {
    let container = document.getElementById("container");
    let data = await fetch(url)
    if (data.ok) {
        let data2 = await data.json();
        console.log(data2);
        data2.forEach(x => {
            let card = document.createElement("div");
            card.innerHTML = `
            <h1>${x.id}</h1>
            <p>${x.name}</p>
            `
            container.append(card)
        })
    } else {
        console.error(
            "failed to fetch teh data"
        )
    }
})
// getData()

async function  postData() {
    let options={
        "method":"POST",
        "headers":{
            "Content-Type":"application/json",
        },
        "body":JSON.stringify({
            "id":6,
            "name":"fridge",
        })
    }
    const data=await fetch(url,options)
    console.log(data);
    if(data.ok){
        let res=await data.json();
        console.log(res);
    }
    
}
// postData()


// async function  postData() {
// let url = "http://localhost:3000/utensils";

//     let options={
//         "method":"POST",
//         "headers":{
//             "Content-Type":"application/json",
//         },
//         "body":JSON.stringify({
//             "id":"4",
//             "name":"bowl"
//         })
//     }
//     const data=await fetch(url,options)
//     console.log(data);
//     if(data.ok){
//         let res=await data.json();
//         console.log(res);
      
//     }
    
// }
// postData()



async function  deleteData(id) {
        let url=`http://localhost:3000/electronics/${id}`;
        let options={
            "method":"DELETE",
        }

        let data=await fetch(url,options);
        if(data.ok){
            let res=await data.json();
        }
}
// deleteData(2)



// async function  updateData(id) {
//     let url=`http://localhost:3000/electronics/${id}`;
//     let options={
//         "method":"PATCH",
//         "headers":{
//             "Content-Type":"application/json"
//         },
//         "body":JSON.stringify({
//             "name":"washingMachine"
//         })
//     }

//     let data=await fetch(url,options);
//     if(data.ok){
//         let res=await data.json();
//     }
// }
// updateData(6)



async function  updateData(id) {
    let url=`http://localhost:3000/utensils/${id}`;
    let options={
        "method":"PATCH",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "name":"pan"
        })
    }

    let data=await fetch(url,options);
    if(data.ok){
        let res=await data.json();
    }
}
updateData(3)