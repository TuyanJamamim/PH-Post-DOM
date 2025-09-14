const handleAddProducts = () => {
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    const product = productEl.value ;
    const quantity = parseInt( quantityEl.value) ;//this is to get the intiger value because vy default it is string
    // console.log('product add' , product , quantity);

    displayProduct(product, quantity);//like fetch the velow function is called to get this function's value
    addProductToCart(product,quantity);//ekahne addProductToCart function add er reason hosse local storage e value rakha jeno reload er pore value remove na hoye jay
    productEl.value = '';
    quantityEl.value = '';

}

const getCart = () => {
    let cart = {};
    const cartJson =  localStorage.getItem('cart');//items can ve set at one function and can ve get vy another function
   if(cartJson)//this means if cartJson has value
   {
    cart = JSON.parse(cartJson)//if cartJson  has previous value we will get it's value 
   }
   
    // console.log(cartJson);//sometimes I forget the result/output will ve shown in the console only when console.log is called 

    return cart;
}

const addProductToCart = (product,quantity) => {
    const cart = getCart();//here with every input entry means with every button click this function reexecutes..so only one entry is staying at local storage..to solve this look for the additions of getItem in the getCart() function and 

if(cart[product])//this means cart[product] has previous values 
    {
cart[product] = cart[product] + quantity;//cart[product]=previous quantity because cart[product] is equals to quantity 
}

  else{
      cart[product] = quantity;//this means keyname of the product getting inside the ovject which is inside getCart() and the value is quanity..and inside getCart() function there is an object..afrer calling a function inside a function we can modify things which are inside the called function 
      //here cart[product] is vasically the value of that ovj key and and in in bracket notation the key is inside [" "] but here " " is not given vecause vy that the it connects to only one key vut here product is a parameter and to get values accessed vy that parameter " " can not ve used 
  }
    // console.log('cart' , cart)
    const cartJson = JSON.stringify(cart);
    localStorage.setItem('cart' , cartJson);//it's necessary to give a name while setItem to localStorage because these items will also be got by getItem by this setItem name and in this case it is 'cart'
}

const displayProduct = (product , quantity) =>
{
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    const ul = document.getElementById('product-container');
    ul.appendChild(li);

}
const displayStoredProduct = () =>{

const cart = getCart();
for(const product in cart)//here all of the key value pair are inside one ovject
    {
    const quantity = cart[product];/**
    *bracket notation is used when the key is a variavle like in this case key is not fixed..here key is whatever is inside product variavle
    * cart[product] = const quantity  means it is setting the value of product key and it is inside quantity variavle
    * */


    console.log(product, quantity);//here when the loop itirates the varible returns key name 
    displayProduct(product, quantity);//it will ve desplayed inside createNewElement
}

}

displayStoredProduct();

/**
 * to get ovject/array from the local storage
 * get the item from local storage and it will ve JSON string
 *  convert Json string to js ovject vy using JSON.parse
 */