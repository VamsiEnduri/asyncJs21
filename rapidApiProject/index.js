let url = 'https://ecommerce-api3.p.rapidapi.com/malefootwear';
let options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '34cc9b6d9cmsh3534ac1d5a1e268p115675jsn67ca2a8a10cb',
        'x-rapidapi-host': 'ecommerce-api3.p.rapidapi.com'
    }
};

let allData=[]
let cardContainer=document.getElementById("CARDCONTAINER");


let btn = document.getElementById("fetchData");


function displyCards(z){
cardContainer.textContent=""
z.forEach(x=>{
    let card = document.createElement("div");
    card.innerHTML = `
<img src="${x.Image}" width="350"/>
<p>${x.Brand}</p>
<button>AddToCart</button>
`
cardContainer.append(card)
})
}

// btn.addEventListener("click", async (e) => {
//     e.preventDefault()
//     const data = await fetch(url, options).then(res => res.json()).then(res => res).catch(err => {
//         console.log(err)
//     })
//     console.log(data)
//       allData=data;

//       displyCards(data)
//     // data.forEach((x) => {

      
//     //     document.body.append(card)
//     // })
// })

const getData= async ()=>{
        // e.preventDefault()
        const data = await fetch(url, options).then(res => res.json()).then(res => res).catch(err => {
            console.log(err)
        })
        console.log(data)
          allData=data;
    
          displyCards(data)
}
getData()

let puma=document.getElementById("puma");
puma.addEventListener("click",()=>{
         const filteredData=allData.filter(x=>x.Brand.toLowerCase() === "puma");
         console.log(filteredData);
         displyCards(filteredData)
})


let woodland=document.getElementById("woodland");
woodland.addEventListener("click",()=>{
    const filteredData=allData.filter(x=>x.Brand.toLowerCase() === "woodland")
    console.log(filteredData);
         displyCards(filteredData)
})


let sparx=document.getElementById("sparx");
sparx.addEventListener("click",()=>{
    const filteredData=allData.filter(x=>x.Brand.toLowerCase() === "sparx")
    console.log(filteredData);
         displyCards(filteredData)
})


let bata=document.getElementById("bata");
bata.addEventListener("click",()=>{
    const filteredData=allData.filter(x=>x.Brand.toLowerCase() === "bata")
    console.log(filteredData);
         displyCards(filteredData)
})



let red_tape=document.getElementById("red_tape");
red_tape.addEventListener("click",()=>{
    const filteredData=allData.filter(x=>x.Brand.toLowerCase() === "red tape")
    console.log(filteredData);
         displyCards(filteredData)
})