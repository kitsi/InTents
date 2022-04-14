import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import getOrders from "../../api/getOrders";
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

  return (
    <Box sx={styles.container}>
      Hello world.
    </Box>
  );
}
