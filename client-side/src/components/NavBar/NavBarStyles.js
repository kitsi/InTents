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

export const cart = {
  textDecoration: "none",
  color: "#fff",
};

export const linksContainer = {
  justifyContent: "center",
  transition: "all .5s",
  gap: {
    md: "0.25rem",
    lg: "2rem",
  },
};

export const headerTitle = {
  fontSize: "1.5rem",
};

export const darkFont = {
  color: "#2F2F2F",
  "&:before": {
    backgroundColor: "#2F2F2F",
  },
};

export const drawerContainer = {
  height: "100%",
  width: "260px",
  backgroundColor: "#DED9E2",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3rem",
  paddingTop: "3rem",
};
