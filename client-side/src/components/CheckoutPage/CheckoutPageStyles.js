export const desktopContentContainer = {
  display: "flex",
  flexDirection: "column-reverse",
  display: "flex",
  alignItems: "center",
  ["@media (min-width:900px)"]: {
    flexDirection: "row",
  },
};

export const desktopAccordionContainer = {
  width: "100vw",
  margin: "1rem",
  ["@media (min-width:900px)"]: {
    width: "70vw",
    margin: "1rem",
  },
};

export const mobileContentContainer = {};

export const mobileAccordionContainer = {};

export const expandIcon = {
  width: "2.5rem",
  height: "2.5rem",
};
