import axios from "axios";
import { baseUrl } from "../utilities/strings";

export default async function getCategories() {
let categories;

  await axios.get(`${baseUrl}/categories/`)
    .then(res => categories = res.data.content);
  
  return categories;
}
