export const link = {
  textDecoration: "none",
  color: "#fff",
};

export const linksContainer = {
  gap: "2rem",
  justifyContent: "center",
  a: {
    position: "relative",
    "&:::after": {
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
    },
  },
};
