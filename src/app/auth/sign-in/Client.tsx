"use client";

import Navbar from "@/components/layouts/Navbar";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import FormTextField from "@/components/shared/inputs/FormTextField";
import { authService } from "@/utils/api";
import { Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Client = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      email: formData.email.toLowerCase(),
    };

    try {
      const response = await authService.login(payload);

      if (response?.status === 201) {
        toast.success("Login successful.", {
          position: "top-center",
          className: "toast-success",
          theme: "light",
          hideProgressBar: true,
        });
        // sessionStorage.setItem("user_email", formData.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="bg-white w-full pt-16 pb-32 text-secondary font-raleway flex flex-col items-center ">
        <div className="w-full ">
          <h1 className="mt-10 text-secondary text-2xl text-center font-medium md:text-3xl">
            Sign in to your account
          </h1>
          <p className=" mt-7 text-textPrimary text-center leading-8 max-w-[540px] mx-auto ">
            Welcome back, sign in to your account.
          </p>

          <Divider sx={{ width: "45%", marginTop: "70px", marginX: "auto" }} />

          <form
            action=""
            className="w-4/5 mt-20 mx-auto flex flex-col gap-[48px] md:w-[45%]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Email
              </label>

              <div className="w-full mr-4">
                <FormTextField
                  control="input"
                  type="email"
                  name="email"
                  value={formData.password}
                  handleChange={handleChange}
                  variant="outlined"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-bold">
                Password
              </label>

              <div className="w-full mr-4">
                <FormTextField
                  control="input"
                  type="password"
                  name="password"
                  value={formData.password}
                  handleChange={handleChange}
                  variant="outlined"
                />
              </div>
            </div>

            <div className="-mt-6">
              <button
                type="button"
                onClick={() => router.push("/forgot-password")}
                className="text-green items-start text-start  font-medium"
              >
                Forgot Password?
              </button>
            </div>

            <div className="w-[150px] mx-auto mt-10">
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

          <div className="text-left items-start flex justify-start lg:w-full"></div>
          <div className="items-center flex flex-col mx-auto">
            <p className="mt-16 text-secondary font-medium mx-auto block">
              No account?{" "}
              <button
                onClick={() => router.push("/auth/sign-up")}
                className="text-primary font-bold"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Client;
