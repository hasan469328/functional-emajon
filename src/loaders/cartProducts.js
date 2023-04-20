import { getShoppingCart } from "../utilities/fakedb";

const cartProducts = async() => {
  const loadedProducts = await fetch('products.json');
  const products = await loadedProducts.json();
  console.log(products)
  // load cart products from shoppingcart local storage
  const storedCart = getShoppingCart();
  const savedCart = [];
  for(const id in storedCart){
    const addedProduct = products.find(pd => pd.id === id);
    

    if(addedProduct){
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
    
  }
  
  return savedCart;
}

export default cartProducts;