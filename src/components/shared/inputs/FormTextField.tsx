// library Methods
import React, { useState } from "react";
import Image from "next/image";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@mui/material";

//Components
import {
  CustomTextFieldOutlined,
  CustomTextFieldOutlinedInputProps,
} from "@/utils/helpers/muiStylesHelper";

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
export interface optionsIprops {
  inputValue?: string;
  // key: string;
  value?: string;
  label?: string;
}
export interface ControlIProps {
  control?: string;
  label?: string;
  bgColor?: string;
  height?: string;
  name?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  inputClass?: string;
  handleChange?: (
    event: any
    // React.ChangeEvent<
    //   HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;

  onFocus?: () => void;
  onBlur?: () => void;
  inputRef?: any;
  value?: string | number;
  disabled?: boolean;
  error?: string;
  id?: string;
  variant?: string;
  options?: optionsIprops[] | any;
  setValue?: (value: string | number | any) => void;
  setFieldValue?: (
    field: string | number | any,
    value: string | number | any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const FormTextfield = ({
  label,
  name = "name",
  value,
  bgColor,
  height,
  type,
  disabled,
  error,
  placeholder,
  handleChange,
  onFocus,
  onBlur,
  inputRef,
  required,
  id,
  variant,
}: ControlIProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleWheel = (event: React.WheelEvent<HTMLInputElement>) => {
    if (type === "number") {
      event.preventDefault();
    }
  };

  return (
    <>
      {type === "password" ? (
        <TextField
          id={id ?? "outlined"}
          value={value}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          autoComplete="off"
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          name={name}
          required={required && required}
          label={label}
          placeholder={placeholder}
          variant="outlined"
          fullWidth
          sx={() => CustomTextFieldOutlined({}, error ? "#F8284E" : "#2B303A")}
          InputProps={{
            sx: CustomTextFieldOutlinedInputProps(bgColor),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{ marginRight: ".3rem" }}
                >
                  <div className="w-full">
                    <button onClick={handleTogglePassword}>
                      {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                    </button>
                    {/* <Image
                      src={
                       
                          ? "public/assets/icons/auth/eyeOpen.svg"
                          : "public/assets/icons/auth/eyeClosed.svg"
                      }
                      alt="eye icon"
                      width={21}
                      height={21}
                    /> */}
                  </div>
                </IconButton>
              </InputAdornment>
            ),
          }}
          color="warning"
        />
      ) : type === "multiline" ? (
        <TextField
          id="outlined-basic"
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          name={name}
          maxRows={4}
          multiline
          required={required && required}
          label={label}
          placeholder={placeholder}
          fullWidth
          InputProps={{
            sx: CustomTextFieldOutlinedInputProps(bgColor, height),
          }}
          sx={() => CustomTextFieldOutlined({}, error ? "#F8284E" : "#2B303A")}
          disabled={disabled}
        />
      ) : type === "text-area" ? (
        <textarea
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          name={name}
          required={required && required}
          className="w-full h-28 px-3 py-2 text-secondary text-base rounded-lg border border-[#cbd1d6] resize-none outline-none hover:border-secondary focus:border-secondary focus:border-[1.5px]"
          placeholder={placeholder}
          disabled={disabled}
        ></textarea>
      ) : variant === "outlined" ? (
        <TextField
          id="outlined-basic"
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          name={name}
          type={type}
          required={required && required}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          fullWidth
          InputProps={{
            sx: CustomTextFieldOutlinedInputProps(bgColor),
          }}
          sx={() => CustomTextFieldOutlined({}, error ? "#F8284E" : "#2B303A")}
          disabled={disabled}
        />
      ) : (
        <TextField
          id={id ?? "outlined-basic"}
          value={value}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={inputRef}
          variant="filled"
          name={name}
          type={type}
          required={required && required}
          label={label}
          placeholder={placeholder}
          fullWidth
          InputProps={{
            sx: CustomTextFieldOutlinedInputProps(bgColor),
            onWheel: handleWheel,
          }}
          sx={() => CustomTextFieldOutlined({}, error ? "#F8284E" : "#2B303A")}
          disabled={disabled}
        />
      )}

      {error && (
        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Image
            src="/assets/icons/auth/error.svg"
            alt="error"
            width={10}
            height={10}
            className="mr-1"
          />
          <FormHelperText
            error
            sx={{
              margin: 0,
            }}
          >
            {error}
          </FormHelperText>
        </div>
      )}
    </>
  );
};

export default React.memo(FormTextfield);
