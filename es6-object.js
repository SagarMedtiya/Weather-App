// object property shorthand

const name = 'Sagar'
const userAge = 25

const user ={
    name: name,
    age: userAge,
    location:"Philadelphia"
}

console.log(user)

const product ={
    label : 'Red notebook',
    price: 3,
    stock: 201,
    saleprice: undefined
}


const transaction =(type, {label, stock})=>{
    console.log(type, label, stock)
}
transaction('order', product)