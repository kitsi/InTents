export const search = {
  position: "relative",
  borderRadius: "theme.shape.borderRadius",
  backgroundColor: "alpha(theme.palette.common.white, 0.15)",
  "&:hover": {
    backgroundColor: "alpha(theme.palette.common.white, 0.25)",
  },
  marginLeft: "0",
  width: "100%",
  // theme.breakpoints.up('sm'): {
  //   marginLeft: theme.spacing(1),
  //   width: 'auto',
  // },
};

const searchIconWrapper = {
  padding: "0",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const styledInputBase = {
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "1, 1, 1, 0",
    // vertical padding + font size from searchIcon
    paddingLeft: `1rem`,
    width: "100%",
  },
};
