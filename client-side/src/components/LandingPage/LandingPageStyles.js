export const container = {
  paddingBottom: "2rem",
};

export const heroImage = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "/images/hero-image.jpeg"})`,
  width: "100%",
  height: "70vh",
  backgroundSize: "cover",
};

export const heroText = {
  color: "white",
  fontSize: {
    xs: "2rem",
    sm: "3rem",
    md: "4rem",
  },
};

export const heroTextWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",

  width: {
    md: "800px",
  },

  marginLeft: {
    lg: "10rem",
  },
};

export const gridContainer = {
  gap: "30px",
  justifyContent: "center",
  padding: {
    xs: "0 1rem",
  },
  width: "100%",
  marginLeft: 0,
  maxWidth: "1000px",
  margin: "2rem auto 0 auto",
};

export const gridItemContainer = {
  display: "flex",
  justifyContent: "center",
};

export const gridItem = {
  border: "2px solid",
  borderColor: "primary.dark",
  borderRadius: "10px",
  textAlign: "center",
  width: "100%",
  height: {
    sm: "150px",
    md: "200px",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
  padding: "12px",
  transition: "0.15s background-color",
  "&:hover": {
    backgroundColor: "primary.dark",
    color: "white",
  },
};

export const gridItemLink = {
  color: "#404040",
  textDecoration: "none",
  fontSize: "2.5rem",
  width: "100%",
};

export const gridItemCategory = {
  fontSize: "1.25rem",
  fontWeight: "bold",
};
