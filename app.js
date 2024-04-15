let packages = document.querySelector("#package_cards") ;
let services = document.querySelector("#services_card") ;
let slot1 = document.querySelectorAll(".slot1") ;  
let slot2 = document.querySelectorAll(".slot2") ; 
let slot3 = document.querySelectorAll(".slot3") ; 
async function fetchingData(){
    let dataFromJson =await fetch("./data.json") ;
    console.log(dataFromJson) ;
    let dataTourism = await dataFromJson.json() ; 
    let data = dataTourism.data ;
    data.map((e) => { 
    packages.innerHTML += `<div class= "card">
    <img src= '${e.img_src[0]}' alt="Loading">
    <h3><i class= fa-solid fa-location-dot></i>${e.h3cont}</h3>
    <p>${e.para}</p>
    <h4>₹ ${e.h4cont}<span>₹ ${e.spancont}</span></h4>
    <button>Book Now</button>
</div> `
});
}
fetchingData() ; 
async function servicesFetching(){
    let dataFromJson = await fetch("./data.json") ; 
    let data2 = await dataFromJson.json() ;
    let servicesCards = data2.service_card ; 
    console.log(servicesCards) ;  
    servicesCards.map((e) =>{ 
        services.innerHTML += `
        <div id="services_cont">
            <i class="card_icon ${e.card_class}"></i>
            <h4>${e.heading}</h4>
            <p>${e.paragraph}</p>
        </div>
    `
    })
}
servicesFetching() ;
img_slot1 =  [
     "./Images/AndhraPradesh.jpeg" , 
     "./Images/Assam.jpeg" , 
     "./Images/ArunachalPradesh.jpeg" , 
     "./Images/Bihar.jpeg"
]  
img_slot2 =  [
    "./Images/nature1.avif" , 
    "./Images/nature2.avif" ,  
    "./Images/nature3.avif" ,  
    "./Images/nature4.jpg"   
] 
img_slot3 = [
     "./Images/himachalPradesh.jpeg" ,
     "./Images/Hydrabad.jpg" , 
     "./Images/Jharkhand.jpeg" , 
     "./Images/Karnataka.jpeg"    
] 

function slot1_images(){ 
    // slot1[0].addEventListener("mouseover" , )
    let index1 = 0 ;
    let index2 = 0 ;  
     setInterval(()=>{
        if(index1 >= img_slot1.length) {
            index1 = 0 ; 
        } 
        slot1[0].innerHTML =
        `
            <img src="${img_slot1[index1]}" alt="">
        ` 
        index1++ ; 
    } , 2000) ; 

    setInterval(()=>{
        if(index2 >= img_slot1.length) {
            index2 = 0 ; 
        } 
        slot1[1].innerHTML =
        `
            <img src="${img_slot1[index2]}" alt="">
        ` 
        index2++ ; 
    } , 2000)
}
slot1_images() ; 

function slot2_images(){ 
    let index1 = 0 ;
    let index2 = 0 ;  
     setInterval(()=>{
        if(index1 >= img_slot2.length) {
            index1 = 0 ; 
        } 
        slot2[0].innerHTML =
        `
            <img src="${img_slot2[index1]}" alt="">
        ` 
        index1++ ; 
    } , 2000) ; 

    setInterval(()=>{
        if(index2 >= img_slot2.length) {
            index2 = 0 ; 
        } 
        slot2[1].innerHTML =
        `
            <img src="${img_slot2[index2]}" alt="">
        ` 
        index2++ ; 
    } , 2000)
}
slot2_images() ; 

function slot3_images(){ 
    let index1 = 0 ;
    let index2 = 0 ; 
    let index3 = 0 ;  
     setInterval(()=>{
        if(index1 >= img_slot3.length) {
            index1 = 0 ; 
        } 
        slot3[0].innerHTML =
        `
            <img src="${img_slot3[index1]}" alt="">
        ` 
        index1++ ; 
    } , 2000) ; 

    setInterval(()=>{
        if(index2 >= img_slot3.length) {
            index2 = 0 ; 
        } 
        slot3[1].innerHTML =
        `
            <img src="${img_slot3[index2]}" alt="">
        ` 
        index2++ ; 
    } , 2000) ; 

    setInterval(()=>{
        if(index3 >= img_slot3.length) {
            index3 = 0 ; 
        } 
        slot3[2].innerHTML =
        `
            <img src="${img_slot3[index3]}" alt="">
        ` 
        index3++ ; 
    } , 2000)
}
slot3_images() ; 