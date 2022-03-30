import "./ProductsPage.css";

import { Divider, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductTile from "../common/ProductTile";
import productsjson from "../../products.json";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productsSlice";

function ProductsPage() {
  // const [products, setProducts] = useState([]);
  const { products } = useSelector((state) => state.products);

  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(productsjson));
  }, [dispatch]);

  const productTiles = products.map((product) => {
    return <ProductTile key={product.id} productData={product} />;
  });

  const headingFormatter = (heading) => {
    let title = "";
    const headingArray = heading.split("-");
    headingArray.forEach(
      (word) =>
        (title += word.substring(0, 1).toUpperCase() + word.substring(1) + " ")
    );

    return title;
  };

  return (
    <div id="products-page">
      <Typography variant="h2" className="products-page-header">
        {category ? headingFormatter(category) : "All Products"}
      </Typography>
      <Divider />

      {products.length === 0 ? (
        <Typography variant="h3">
          No Products Available. Please check back again!
        </Typography>
      ) : (
        <div className="product-tiles-container">{productTiles}</div>
      )}
    </div>
  );
}

export default ProductsPage;
