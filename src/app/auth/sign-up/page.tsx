"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
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
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This is a required field"),
    lastName: Yup.string().required("This is a required field"),
    email: Yup.string()
      .email("Please enter a valid email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address"
      )
      .required("This is a required field"),
    password: Yup.string()
      .min(8, "Password must be at least 8 charaters")
      .max(18, "Password cannot be more than 18 characters")
      .matches(/[A-Z]/)
      .matches(/[a-z]/)
      .matches(/[0-9]/)
      .required("Please enter your password"),
    phoneNumber: Yup.string()
      .min(9, "Invalid phone number")
      .max(13, "Invalid phone number")
      .required("This is a required field"),
  });

  interface formInputs {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
  }

  const handleSubmit = async (formData: formInputs) => {
    const payload = {
      ...formData,
      email: formData.email.toLowerCase(),
    };

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
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            className="text-primary"
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
