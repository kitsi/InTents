import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import getOrders from "../../api/getOrders";
import Loading from "../common/Loading";
import * as styles from "./OrderHistoryPageStyles";

export default function OrderHistoryPage() {
  const [orders, setOrders] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [curPage, setCurpage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [success, setSuccess] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      const { orders, success, totalPages } = await getOrders(curPage);
      setOrders(orders);
      setSuccess(success);
      setTotalPages(totalPages);
      setIsLoading(false);
    }

    fetchOrders();
  }, [curPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (!success) {
    return (
      <Box xs={styles.container}>
        <Typography sx={styles.errorText}>There was an error getting orders from the server.</Typography>
      </Box>
    );
  }

  if (orders.length === 0) {
    return (
      <Box xs={styles.container}>
        <Typography sx={styles.noOrderText}>There are currently no orders in the database.</Typography>
      </Box>
    );
  }
  
  return (
    <Box sx={styles.container}>
      Hello world.
    </Box>
  );
}
