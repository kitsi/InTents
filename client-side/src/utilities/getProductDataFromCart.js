import axios from "axios";
import { baseUrl } from "./strings";

export default async function getProductDataFromCart(cartItems) {
  const products = [];
  const removedCartItems = [];

  for (let i = 0; i < cartItems.length; i++) {
    await axios.get(`${baseUrl}/products/${cartItems[i].id}`)
      .then(response => console.log(products.push(response.data)))
      .catch(() => removedCartItems.push(cartItems[i]));
  }

  return { products, removedCartItems };
}
