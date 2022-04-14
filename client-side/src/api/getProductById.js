import axios from "axios";
import { baseUrl } from "../utilities/strings";

export default async function getProductById(id) {
  let product;
  let errorMessage = "";

  await axios
    .get(`${baseUrl}/products/${id}`)
    .then((res) => {
      if (res.data) {
        errorMessage = "";
        product = res.data;
      }
    })
    .catch((error) => {
      if (!error.response) {
        errorMessage = "Error: Network Error";
        return;
      }
      errorMessage = `Error: ${error.response.status}: ${error.response.data.error} - ${error.response.data.message}`;
    });
  return { product, errorMessage };
}
