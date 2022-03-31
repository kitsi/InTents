import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../common/Loading";
import ProductDetails from "../ProductDetails/ProductDetails";

function ProductDetailsPage() {
  const { sku } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  async function getProduct() {
    setLoading(true);
    const { data } = await axios
      .get(`http://localhost:3001/products?sku=${sku}`)
      .catch((err) => setError(err));
    setLoading(false);
    setProduct(data[0]);
    console.log(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="product-details-page">
      {loading ? <Loading /> : <ProductDetails product={product} />}
    </div>
  );
}

export default ProductDetailsPage;
