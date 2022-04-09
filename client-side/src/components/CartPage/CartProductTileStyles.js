export const cartCard = {
  position: "relative",
  ["@media (min-width:900px)"]: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
  },
};

export const cardTotal = {
  position: "absolute",
  top: "0",
  right: "1rem",
  margin: "1rem",
};

export const productImage = {
  width: "200px",
  objectFit: "contain",
  marginLeft: "1rem",
};

export const productDetails = {
  flexGrow: "1",
  ["@media (min-width:900px)"]: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
  },
};

export const productDescription = {
  ["@media (min-width:900px)"]: {
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "initial",
  },
};

export const cardActions = {
  display: "flex",
  justifyContent: "space-between",
  marginRight: "0",
  marginTop: "auto",
  flexShrink: "0",
};

export const quantityChange = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexGrow: "1",
};

export const qtyLabel = {
  width: "50px",
  textAlign: "center",
};

export const deleteIcon = {
  padding: "0",
  svg: {
    width: "35px",
    height: "35px",
  },
};
