const handleAddProducts = () => {
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    const product = productEl.value ;
    const quantity = quantityEl.value ;
    // console.log('product add' , product , quantity);

    displayProduct(product, quantity);//like fetch the velow function is called to get this function's value
    addProductToCart(product,quantity);//ekahne addProductToCart function add er reason hosse local storage e value rakha jeno reload er pore value remove na hoye jay
    productEl.value = '';
    quantity.value = '';

}

const getCart = () => {
    const cart = {};
    return cart;
}

const addProductToCart = (product,quantity) => {
    const cart = getCart();
    cart[product] = quantity;//this means keyname of the product getting inside the ovject which is inside getCart()
    console.log('cart' , cart)
}

const displayProduct = (product , quantity) =>
{
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    const ul = document.getElementById('product-container');
    ul.appendChild(li);

}