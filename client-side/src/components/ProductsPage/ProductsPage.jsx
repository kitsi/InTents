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
  const [prevCategoryId, setPrevCategoryId] = useState();
  const [products, setProducts] = useState([]);
  const [allCategories, setAllCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [curPage, setCurPage] = useState(0);
  const [prevPage, setPrevPage] = useState();
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const checkCategories = async () => {
      setAllCategories(await getCategories());
    };
    checkCategories();
  }, []);

  useEffect(() => {
    // Fetching products
    const checkProducts = async () => {
      if (prevCategoryId !== categoryId) {
        setIsLoading(true);
      }

      const { products, success, totalPages, pageNumber } = await getProducts(
        curPage,
        categoryId
      );

      setProducts(products);
      setError(!success);
      setTotalPages(totalPages);
      setCurPage(Math.max(0, Math.min(pageNumber, totalPages - 1)));

      setIsLoading(false);
    };

    // Making sure category exists and setting the id in state
    if (category && allCategories) {
      if (!allCategories.map((category) => category.title).includes(category)) {
        return navigate("/products");
      }
      setCategoryId(
        allCategories.filter((cat) => cat.title === category)[0].categoryId
      );
    } else {
      setCategoryId(0);
    }

    // Prevent multiple rerenders
    if (prevCategoryId !== categoryId) {
      checkProducts();
      setPrevCategoryId(categoryId);
    } else if (prevPage !== curPage) {
      checkProducts();
      setPrevPage(curPage);
    }
  }, [category, categoryId, curPage, prevPage, prevCategoryId, allCategories, navigate]);

  const productTiles = products?.map((product) => {
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

      {error ?
        <Typography sx={styles.error}>Error getting products. Cannot reach server.</Typography>
      : (
      <>
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
      </>
      )}
    </div>
  );
}

export default ProductsPage;
