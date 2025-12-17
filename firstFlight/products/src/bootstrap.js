import faker from 'faker';

// console.log("hii")

const mount=(el)=>{
    
let products='';
for(let i=0;i<10;i++){
    const name=faker.commerce.productName();
    products+=`<div>${name}</div>`
}
el.innerHTML=products;
}
// console.log(process.env.NODE_ENV);
//     console.log(document.getElementById("dev-products"))


if(process.env.NODE_ENV=='development'){

const el=document.getElementById('dev-products');
if(el){
    mount(el)
}
}

export {mount};