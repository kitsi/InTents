export const link = {
  textDecoration: "none",
  color: "#fff",
  textTransform: "none",
  fontSize: "1rem",
  "&.active": {
    p: {
      fontWeight: "bold",
    },
  },
  "&::after": {
    transition: "all .5s",
  },
  "&::before": {
    transition: "all .5s",
  },
};

export const linksContainer = {
  gap: "2rem",
  justifyContent: "center",
  transition: "all .5s",
  a: {
    position: "relative",
    "&::after": {
      position: "absolute",
      bottom: -"2px",
      left: "0",
      right: "0",
      margin: "auto",
      width: "0%",
      content: "'.'",
      color: "transparent",
      background: "white",
      height: "2px",
      "&::hover": {
        width: "100%",
      },
    },
  },
};
