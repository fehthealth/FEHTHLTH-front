"use client";

import { useRouter } from "next/navigation";

import { Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { authService } from "@/utils/api";

//component
import FormInputs from "./FormInputs";
import Navbar from "@/components/layouts/Navbar";

const Signup = () => {
  const router = useRouter();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    country: "",
    roles: [],
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This is a required field"),
    lastName: Yup.string().required("This is a required field"),
    country: Yup.string().required("This is a required field"),
    // roles: Yup.array()
    // .of(Yup.string().required("User role is required"))
    // .min(1, "Please select at least one role")
    // .max(1, "Please select only one role"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("This is a required field"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must include an uppercase letter")
      .matches(/[a-z]/, "Must include a lowercase letter")
      .matches(/[0-9]/, "Must include a number")
      .required("Please enter your password"),
    phoneNumber: Yup.string()
      .min(9, "Invalid phone number")
      .max(13, "Invalid phone number")
      .required("This is a required field"),
  });
  
  const handleSubmit = async (formData: formInputs) => {
    const payload = {
      ...formData,
      email: formData.email.toLowerCase(),
      roles: [formData.roles],
    };

    console.log("payload", payload);
  
    try {
      const response = await authService.signup(payload);
  
      if (response?.status === 201) {
        toast.success("Registration successful.", {
          position: "top-center",
          className: "toast-success",
          theme: "light",
          hideProgressBar: true,
        });
        sessionStorage.setItem("user_email", formData.email);
        router.push("/auth/sign-in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  interface formInputs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    country: string;
    roles: string[];
  }

  // const handleSubmit = async (formData: formInputs) => {
  //   const payload = {
  //     ...formData,
  //     email: formData.email.toLowerCase(),
  //   };

  //   try {
  //     const response = await authService.signup(payload);

  //     if (response?.status === 201) {
  //       toast.success("Registration successful.", {
  //         position: "top-center",
  //         className: "toast-success",
  //         theme: "light",
  //         hideProgressBar: true,
  //       });
  //       sessionStorage.setItem("user_email", formData.email);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <section className="bg-white w-full pt-10 pb-32 font-grotesk flex flex-col items-center">
        <h1 className="mt-10 text-black text-2xl text-center font-medium md:text-3xl">
          Create an account
        </h1>
        <p className="max-w-[340px] mt-6 text-secondary text-center leading-8 md:max-w-[70%] lg:max-w-[580px]"></p>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormInputs />
        </Formik>
        <p className="mt-14 text-black font-bold">
          Already got an account?{" "}
          <button
            className="text-green"
            onClick={() => router.push("/auth/sign-in")}
          >
            Sign In
          </button>
        </p>
      </section>
    </main>
  );
};

export default Signup;
