/**
 * Styles for the border of an outlined TextField element.
 */
const CustomTextFieldOutlined = (custom = {}, borderColor: string) => ({
  ...custom,
  borderColor: "#cbd1d6",
  "& .MuiOutlinedInput-root": {
    // "& > fieldset": { borderColor },
    // focused color for input with variant='outlined'
    "& fieldset": {
      borderColor: "#cbd1d6",
    },
    "&.Mui-focused fieldset": {
      borderColor,
    },
  },
  "& .MuiInputLabel-root": {
    lineHeight: "1rem",
    fontSize: "0.8rem",
  },

  "& label.Mui-focused": {
    color: borderColor,
  },
  "& .MuiChip-deleteIcon": {
    color: "#F2F8FE",
  },

  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: borderColor,
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: borderColor,
  },
});

/**
 * Styles for a TextField element.
 */
const CustomTextFieldOutlinedInputProps = (
  bgColor?: string,
  height?: string
) => ({
  backgroundColor: bgColor ? bgColor : "white",
  // color: "#2B303A",
  borderRadius: "5px",
  height: height ? height : "48px",
  "& label.Mui-focused": {
    color: "#2B303A",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#2B303A",
  },
});

/**
 * Styles for a Select element.
 */
const CustomSelectProps = () => ({
  backgroundColor: "white",
  color: "#2B303A",
  borderRadius: "5px",
  height: "60px",
});

/**
 * Used to apply a some default styling to the page wrapper container.
 */
const PageContainerWrapper = (custom = { minHeight: "100%", flexGrow: 1 }) => ({
  ...custom,
  overflow: "hidden",
  display: "block",
  position: "relative",
});

export {
  CustomTextFieldOutlined,
  CustomTextFieldOutlinedInputProps,
  CustomSelectProps,
  PageContainerWrapper,
};
