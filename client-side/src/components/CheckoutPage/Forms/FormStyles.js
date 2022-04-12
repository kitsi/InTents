export const submitButtonWrapper = {
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  alignItems: "center",
  marginTop: "1rem",

  "@media (max-width:900px)": {
    flexDirection: "column",
    gap: "1rem",
  },
};

export const submitButton = {
  height: "45px",
  width: "140px",
  marginLeft: "auto",
  "@media (max-width:900px)": {
    width: "100%",
  },
};

export const errorAlert = {
  "@media (max-width:900px)": {
    width: "100%",
  },
};

export const loadingIcon = {
  color: "primary.main",
};
