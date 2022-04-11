export const card = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflow: "hidden",
  gap: "0.5rem",

  a: {
    textDecoration: "none",
    color: "black",
  },

  "@media (min-width:900px)": {
    display: "flex",
    flexDirection: "row",
  },
};

export const productImage = {
  transition: "all 0.15s",
  objectFit: "contain",
  margin: "auto",
  "@media (min-width:900px)": {
    width: "200px",
    objectFit: "contain",
    marginLeft: "1rem",
  },

  "&:hover": {
    transform: "scale(1.2)",
  },
};

export const productDetails = {
  zIndex: "1",
  "@media (min-width:900px)": {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
  },
};

export const productDescription = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  "@media (min-width:900px)": {
    whiteSpace: "normal",
  },
};

export const cardActions = {
  alignItems: "flex-end",
  justifyContent: "flex-end",
  marginRight: "0",
  marginTop: "auto",
  flexShrink: "0",
};
