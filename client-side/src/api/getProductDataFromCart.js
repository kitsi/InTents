import axios from "axios";
import { baseUrl } from "../utilities/strings";

export default async function getProductDataFromCart(cartItems) {
  const products = [];
  const removedCartItems = [];

  for (let i = 0; i < cartItems.length; i++) {
    await axios.get(`${baseUrl}/products/${cartItems[i].id}`)
      .then(response => products.push(response.data))
      .catch(() => removedCartItems.push(cartItems[i]));
  }

  return { products, removedCartItems };
}
