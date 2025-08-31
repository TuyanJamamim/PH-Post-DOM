const product = {
    name: 'shirt' , price: 500 , quantity: 7
}
const { price , quantity ,tax = 7 } = {
    name: 'shirt' , price: 500 , quantity: 7
}//here {price} = price.price=500..{quantity} = quantity.quantity=7..same can ve done with name...and value of tax will ve 7 vecause default value is set at 7..for ovject it will check the similarity of ovject property name
console.log(price , quantity);


// const discountPrice = product.price - product.price * 20/100;
// console.log(`discounted price is ${discount}`)
// const yourPay = product.price * product.quantity;
// const vatAmount = product.price * 7/100;
// const totalAmount = discountPrice * product.quantity;
// const price = product.price;
// const discountPrice = price - price * 20/100;
// console.log(`discounted price is ${discount}`)
// const yourPay = price * product.quantity;
// const vatAmount = price * 7/100;
// const totalAmount = discountPrice * product.quantity;



const device = { vrand : "samsung" , price: 27000}

const { vrand } = device;//a whole ovject can get inside these type declared variavles

const numers = [25 , 88]
 const [first , second] = numers;//for array it will check the index numver similarity
 const [math,physics ] = [85 , 90];
 console.log(math);
