import { Divider, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductTile from "./ProductTile";
import Loading from "../common/Loading";
import * as styles from "./ProductsPageStyles";
import getCategories from "../../api/getCategories";
import getProducts from "../../api/getProducts";
import PaginationBar from "../common/PaginationBar";
import { useLocation } from "react-router-dom";
function ProductsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { category } = useParams();
  const [searchText, setSearchText] = useState("");
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

    const { state } = location;
    setSearchText("");
    if (state) {
      const {
        searchProducts,
        searchSuccess,
        searchTotalPages,
        searchPageNumber,
        searchText,
      } = state;

      setProducts(searchProducts);
      setError(!searchSuccess);
      setTotalPages(searchTotalPages);
      setCurPage(Math.max(0, Math.min(searchPageNumber, searchTotalPages - 1)));
      setSearchText(searchText);

      setIsLoading(false);
    } else {
      // Prevent multiple rerenders
      if (prevCategoryId !== categoryId) {
        checkProducts();
        setPrevCategoryId(categoryId);
      } else if (prevPage !== curPage) {
        checkProducts();
        setPrevPage(curPage);
      }
    }
  }, [
    category,
    categoryId,
    curPage,
    prevPage,
    prevCategoryId,
    allCategories,
    navigate,
    location,
  ]);

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
        {category
          ? headingFormatter(category)
          : searchText
          ? "Searched: " + headingFormatter(searchText)
          : "All Products"}
      </Typography>
      <Divider />

      {error ? (
        <Typography sx={styles.error}>
          Error getting products. Cannot reach server.
        </Typography>
      ) : (
        <>
          
            {isLoading ? (
              <Loading />
            ) : products.length === 0 ? (
              <Typography variant="h3" sx={styles.alignCenter}>
                No Products match your search query.
              </Typography>
            ) : (
              <>
                <PaginationBar
                  curPage={curPage}
                  totalPages={totalPages}
                  setCurPage={setCurPage}
                />
                <Box sx={styles.productTilesContainer}>
                  {productTiles}
                </Box>
                <PaginationBar
                  curPage={curPage}
                  totalPages={totalPages}
                  setCurPage={setCurPage}
                />
              </>
            )}
        </>
      )}
    </div>
  );
}

export default ProductsPage;
