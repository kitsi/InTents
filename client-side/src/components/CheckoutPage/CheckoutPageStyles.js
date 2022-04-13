export const desktopContentContainer = {
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  "@media (min-width:900px)": {
    flexDirection: "row",
    alignItems: "flex-start",
    overflowX: "hidden",
  },
};

export const desktopAccordionContainer = {
  margin: "1rem",
  "@media (min-width:900px)": {
    width: "70vw",
    margin: "1rem",
  },
};

export const expandIcon = {
  width: "2.5rem",
  height: "2.5rem",
};

export const checkoutPage = {
  overflowX: "hidden",
  padding: {
    md: "1rem 2rem",
  },
};
