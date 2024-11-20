"use client";

import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import FormTextField from "@/components/shared/inputs/FormTextField";
import React, { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    toast.success("hello", {
      position: "top-center",
      theme: "light",
      hideProgressBar: true,
    });
  };

  return (
    <main className="bg-white min-h-screen text-secondary font-grotesk">
      {" "}
      <Navbar />
      <div className="w-3/5 mx-auto pt-14 pb-28">
        <h1 className="text-3xl font-bold">Contact Us</h1>

        <form action="" className="mt-10 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              Name
            </label>

            <FormTextField
              control="input"
              type="text"
              // label="Address"
              name="fullName"
              // value={values?.location}
              // value={ currentIndex ? restaurantInputs?.location : val?.location}
              // disabled={item?.isNew ? false : status}
              // handleChange={handleChange}
              // error={
              //   showError && errors?.firstName ? errors?.firstName : ""
              // }
              variant="outlined"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              Email
            </label>

            <FormTextField
              control="input"
              type="email"
              // label="Address"
              name="email"
              // value={values?.location}
              // value={ currentIndex ? restaurantInputs?.location : val?.location}
              // disabled={item?.isNew ? false : status}
              // handleChange={handleChange}
              // error={
              //   showError && errors?.firstName ? errors?.firstName : ""
              // }
              variant="outlined"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              Phone Number
            </label>

            <div className="w-full mr-4">
              <FormTextField
                control="input"
                type="text"
                // label="Address"
                name="phoneNumber"
                // value={values?.location}
                // value={ currentIndex ? restaurantInputs?.location : val?.location}
                // disabled={item?.isNew ? false : status}
                // handleChange={handleChange}
                // error={
                //   showError && errors?.firstName ? errors?.firstName : ""
                // }
                variant="outlined"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-bold">
              Message
            </label>

            <div className="w-full mr-4">
              <FormTextField
                control="input"
                type="text-area"
                // label="Address"
                name="phoneNumber"
                // value={values?.location}
                // value={ currentIndex ? restaurantInputs?.location : val?.location}
                // disabled={item?.isNew ? false : status}
                // handleChange={handleChange}
                // error={
                //   showError && errors?.firstName ? errors?.firstName : ""
                // }
                bgColor="#92DCE5"
                variant="outlined"
              />
            </div>
          </div>

          <div className="w-[150px] ml-auto mt-10">
            <PrimaryButton
              onClick={handleSubmit}
              bgColor="bg-secondary"
              color="text-white"
              text="Submit"
              disabled={isLoading}
              disabledColor="disabled:bg-disabled"
            />
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
};

export default page;
