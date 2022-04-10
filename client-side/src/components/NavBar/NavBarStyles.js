/* https://stackoverflow.com/questions/69730677/underline-animation-on-hover-mui */
export const link = {
  textDecoration: "none",
  color: "#fff",
  textTransform: "none",
  position: "relative",
  fontSize: "1rem",

  "&.active": {
    p: {
      fontWeight: "bold",
    },
  },

  "&:before": {
    visibility: "hidden",
    content: "''",
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "-3px",
    left: "50%",
    transform: "translate(-50%,0%)",
    backgroundColor: "white",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover:before": {
    visibility: "visible",
    width: "100%",
  },
};

export const linksContainer = {
  gap: "2rem",
  justifyContent: "center",
  transition: "all .5s",
};

export const headerTitle = {
  fontSize: "1.5rem",
};
