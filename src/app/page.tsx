"use client";
import React from "react";
import Image from "next/image";

import fehtHealthLogo from "../../public/assets/feht-health.png";
import Link from "next/link";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

const page = () => {
  return (
    <div className="bg-gradient-to-tr from-secondary to-primary w-full h-screen font-raleway flex flex-col items-center justify-center gap-6">
      <div className="bg-secondary px-20 py-16 flex flex-col items-center gap-2 backdrop-blur-lg rounded-xl">
        <Image src={fehtHealthLogo} alt="feht logo" className="w-80" />
        <h1 className="mt-10 text-5xl font-grotesk font-bold">Coming Soon!!</h1>
        {/* <h3 className="mt-6 text-2xl">We are almost there</h3> */}
        <p className="mt-5 max-w-lg flex justify-center items-center text-center">
          Welcome to FEHTHealth, where we bridge the gap between patients and
          doctors worldwide. Our platform empowers you to connect with top
          healthcare professionals from the comfort of your home—anytime,
          anywhere. Whether you need expert advice, a second opinion, or ongoing
          care, we make it simple, secure, and accessible. Your health, your
          way!
        </p>
        <div className="mt-10">
          <PrimaryButton
            text="Click to Join the WaitList"
            color="text-primary"
            borderColor="border-primary"
            rounded="rounded-md"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeqOUGmzLkhuo5Ss5r5S7q0qxRDP0t4m3x5IX1GsKE7HrD4aw/viewform?usp=header",
                "_blank"
              )
            }
          />
        </div>
        {/* <div className="mt-6 flex flex-col items-center">
          <p className="">
            Have questions or need assistance? We&apos;re here to help!{" "}
          </p>

          <Link
            href="https://forms.gle/rmYjkoPXptBNJToA6"
            target="_blank"
            className="text-primary"
          >
            Please reach out to us.
          </Link>
        </div>{" "} */}
      </div>
    </div>
  );
};

export default page;
