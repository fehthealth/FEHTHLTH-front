import { Checkbox, FormControlLabel } from "@mui/material";

type Props = {
  isChecked: boolean;
  handleCheck: (value: any) => void;
  name?: string;
  inputProps?: string;
  label?: string;
};

const CheckboxInput = ({
  isChecked,
  handleCheck,
  label,
  name,
  inputProps,
}: Props) => {
  return (
    <div>
      <FormControlLabel
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "4px",
          alignSelf: "center",
        }}
        control={
          <Checkbox
            className="w-5 h-5"
            checked={isChecked}
            onChange={handleCheck}
            name={name ? name : ""}
            inputProps={{
              "aria-label": inputProps ? inputProps : "",
            }}
            sx={{
              color: "#ABABAB",
              "&.Mui-checked": {
                color: "#15BA5C",
              },
              "& .MuiSvgIcon-root": {
                fontSize: 20,
                color: "#15BA5C",
              },
            }}
          />
        }
        label={label ? label : ""}
      />
    </div>
  );
};

export default CheckboxInput;
