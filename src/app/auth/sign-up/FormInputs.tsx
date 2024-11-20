import { useState } from "react";
import Image from "next/image";
import { Form, Field, ErrorMessage, useFormikContext } from "formik";

import { Checkbox } from "@mui/material";
import Link from "next/link";
import { AiFillEyeInvisible } from "react-icons/ai";
import { IoEyeOutline, IoEyeSharp } from "react-icons/io5";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

const FormInputs = () => {
  const [revealPassword, setRevealPassword] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);

  const regex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  interface formvalues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    businessName: string;
    numberOfLocations: string;
  }
  const { values, errors, touched } = useFormikContext<formvalues>();

  const formKeypressValidation = (e: any, value: any) => {
    const regex = new RegExp(value);
    if (!regex.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <Form className="w-4/5 mx-5 mt-20 font-raleway flex flex-col gap-7 md:w-[55%] md:mx-10 ">
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-secondary text-[12.4px] md:text-sm lg:text-base"
          >
            FIRST NAME*
          </label>
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            onKeyPress={(e: any) => formKeypressValidation(e, /^[A-Za-z\- ]$/)}
            className={`bg-transparent w-full h-12 px-4 text-secondary text-[12.4px] rounded-md border outline-none placeholder:text-textPrimary md:text-sm lg:text-base ${
              errors.firstName && touched.firstName
                ? "border-errorBorder"
                : "border-inputBorder"
            } `}
          />
          <ErrorMessage
            name="firstName"
            component="p"
            className="bg-errorBG w-40 mt-1 px-2 py-2 text-error text-sm rounded-lg"
          />{" "}
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-secondary text-[12.4px] md:text-sm lg:text-base"
          >
            LAST NAME*
          </label>

          <Field
            type="text"
            name="lastName"
            placeholder="Last Name"
            onKeyPress={(e: any) => formKeypressValidation(e, /^[A-Za-z\- ]$/)}
            className={`bg-transparent w-full h-12 mt-2 px-4 text-secondary text-[12.4px] rounded-md border outline-none placeholder:text-textPrimary md:text-sm lg:text-base ${
              errors.lastName && touched.lastName
                ? "border-errorBorder"
                : "border-inputBorder"
            } `}
          />
          <ErrorMessage
            name="lastName"
            component="p"
            className="bg-errorBG w-40 mt-1 px-2 py-2 text-error text-sm rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-secondary text-[12.4px] md:text-sm lg:text-base"
          >
            EMAIL*
          </label>
          <Field
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className={`bg-transparent w-full h-12 px-4 text-secondary text-[12.4px] rounded-md border outline-none placeholder:text-textPrimary md:text-sm lg:text-base ${
              errors.email && touched.email
                ? "border-errorBorder"
                : "border-inputBorder"
            } `}
          />
          <ErrorMessage
            name="email"
            component="p"
            className="bg-errorBG w-44 mt-1 px-2 py-2 text-error text-sm rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-secondary text-[12.4px] md:text-sm lg:text-base"
          >
            PASSWORD*
          </label>
          <div
            className={`bg-transparent w-full h-12 px-4 text-secondary text-[12.4px] flex rounded-md border outline-none placeholder:text-textPrimary md:text-sm lg:text-base ${
              errors.password && touched.password
                ? "border-errorBorder"
                : regex.test(values.password)
                ? "border-green"
                : "border-inputBorder"
            } `}
          >
            <Field
              type={revealPassword ? "text" : "password"}
              name="password"
              placeholder="Enter a password"
              className="w-[98%] outline-none"
            />
            <button
              type="button"
              onClick={() => setRevealPassword(!revealPassword)}
              className="bg-transparent border-none"
            >
              {revealPassword ? (
                <IoEyeOutline />
              ) : (
                <IoEyeSharp fontSize="medium" />
              )}
            </button>
          </div>

          {errors.password === "Password cannot be more than 25 charaters" && (
            <ErrorMessage
              name="password"
              component="p"
              className="bg-errorBG w-80 mt-1 px-2 py-2 text-error text-sm rounded-lg"
            />
          )}

          {/* {values?.password.length > 0 && (
            <div className="mt-4 flex flex-col gap-4">
              <div className="text-textPrimary text-sm font-poppins flex items-center gap-1">
                <div className="w-5">
                  {/[A-Z]/.test(values?.password) && (
                    <Image src={checked} alt="checked icon" />
                  )}
                </div>
                <p>1 Uppercase Character</p>
              </div>
              <div className="text-textPrimary text-sm font-poppins flex items-center gap-1">
                <div className="w-5">
                  {/[a-z]/.test(values?.password) && (
                    <Image src={checked} alt="checked icon" />
                  )}
                </div>
                <p>1 Lowercase Character</p>
              </div>
              <div className="text-textPrimary text-sm font-poppins flex items-center gap-1">
                <div className="w-5">
                  {/[0-9]/.test(values?.password) && (
                    <Image src={checked} alt="checked icon" />
                  )}
                </div>
                <p>1 Number</p>
              </div>
              <div className="text-textPrimary text-sm font-poppins flex items-center gap-1">
                <div className="w-5">
                  {/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(values?.password) && (
                    <Image src={checked} alt="checked icon" />
                  )}
                </div>
                <p>1 Symbol</p>
              </div>
              <div className="text-textPrimary text-sm font-poppins flex items-center gap-1">
                <div className="w-5">
                  {values?.password.length >= 8 && (
                    <Image src={checked} alt="checked icon" />
                  )}
                </div>
                <p>8 Characters minimum</p>
              </div>
            </div>
          )} */}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor=""
            className="text-secondary text-[12.4px] md:text-sm lg:text-base"
          >
            PHONE*
          </label>
          <Field
            type="tel"
            name="phoneNumber"
            placeholder="Enter Your Phone Number"
            onKeyPress={(e: any) => formKeypressValidation(e, /^[0-9+\-() ]*$/)}
            className={`bg-transparent w-full h-12 px-4 text-secondary text-[12.4px] rounded-md border outline-none placeholder:text-textPrimary md:text-sm lg:text-base ${
              errors.phoneNumber && touched.phoneNumber
                ? "border-errorBorder"
                : "border-inputBorder"
            } `}
          />
          <ErrorMessage
            name="phoneNumber"
            component="p"
            className="bg-errorBG w-40 mt-1 px-2 py-2 text-error text-sm rounded-lg"
          />
        </div>

        <div className="mt-6 flex gap-2 items-center justify-center">
          <div className="-mt-3 md:mt-3 lg:-mt-3">
            <Checkbox
              className="w-4 h-4 mt-1 self-start"
              checked={termsCheck}
              onChange={() => setTermsCheck(!termsCheck)}
              sx={{
                "&.Mui-checked": {
                  color: "#2B303A",
                },
              }}
            />
          </div>

          <p className="mt- text-secondary text-sm leading-6 font-medium">
            I have read and accepted the{" "}
            <Link href={"/policy"} className="text-primary">
              privacy policy
            </Link>{" "}
            and the{" "}
            <Link href={"/policy"} className="text-primary">
              Terms & Conditions
            </Link>
          </p>
        </div>

        <div className="w-[150px] mx-auto mt-10">
          <PrimaryButton
            // onClick={handleSubmit}
            bgColor="bg-secondary"
            color="text-white"
            text="Proceed"
            disabledColor="disabled:bg-disabled"
          />
        </div>
      </Form>
    </>
  );
};

export default FormInputs;
