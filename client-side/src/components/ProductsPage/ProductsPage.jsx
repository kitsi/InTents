import { Divider, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductTile from "./ProductTile";
import Loading from "../common/Loading";
import * as styles from "./ProductsPageStyles";
import getCategories from "../../api/getCategories";
import getProducts from "../../api/getProducts";
import PaginationBar from "../common/PaginationBar";

function ProductsPage() {
  const navigate = useNavigate();

  const { category } = useParams();
  const [categoryId, setCategoryId] = useState(0);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [curPage, setCurPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const checkCategories = async () => {
      const categories = await getCategories();
      
      if (category) {
        if (!categories.map(category => category.title).includes(category)) {
          return navigate("/products");
        }

        setCategoryId(categories.filter(cat => cat.title === category)[0].categoryId);
      } else {
        setCategoryId(0);
      }
    }

    const checkProducts = async () => {
      setIsLoading(true);

      const { products, totalPages, pageNumber } = await getProducts(curPage, categoryId);
      setProducts(products);
      setTotalPages(totalPages);
      setCurPage(Math.max(0, Math.min(pageNumber, totalPages - 1)));

      setIsLoading(false);
    }
    
    checkCategories();
    checkProducts();
  }, [category, categoryId, curPage, navigate]);

  const productTiles = products.map((product) => {
      return <ProductTile key={product.productId} productData={product} />;
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
      <Typography
        variant="h2"
        sx={{ ...styles.productsPageHeader, ...styles.alignCenter }}
      >
        {category ? headingFormatter(category) : "All Products"}
      </Typography>
      <Divider />

      <PaginationBar curPage={curPage} totalPages={totalPages} setCurPage={setCurPage} />

      <Box sx={styles.productTilesContainer}>
        {isLoading ? (
          <Loading />
        ) : products.length === 0 ? (
          <Typography variant="h3" sx={styles.alignCenter}>
            No Products Available. Please check back again!
          </Typography>
        ) : (
          <>{productTiles}</>
        )}
      </Box>

      <PaginationBar curPage={curPage} totalPages={totalPages} setCurPage={setCurPage} />
    </div>
  );
}

export default ProductsPage;
