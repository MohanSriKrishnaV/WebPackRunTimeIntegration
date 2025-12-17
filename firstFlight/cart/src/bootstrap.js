import faker from 'faker';



const mount=(el)=>{
        console.log("mouting cart",el);

const ct=`<div>you have ${faker.random.number()}  items in your cart</div>`
el.innerHTML=ct
}

if(process.env.NODE_ENV==='development'){
const el=document.getElementById('dev-cart')
if(el){
    mount(el)
}
}

export {mount}