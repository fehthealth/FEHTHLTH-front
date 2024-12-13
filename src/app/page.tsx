import React from "react";
import Image from "next/image";

import fehtHealthLogo from "../../public/assets/feht-health.png";
import Link from "next/link";

const page = () => {
  return (
    <div className="bg-gradient-to-tr from-secondary to-primary w-full h-screen font-raleway flex flex-col items-center justify-center gap-6">
      <div className="bg-secondary px-20 py-16 flex flex-col items-center gap-2 backdrop-blur-lg rounded-xl">
        <Image src={fehtHealthLogo} alt="feht logo" className="w-80" />
        <h1 className="mt-10 text-5xl font-grotesk font-bold">Coming Soon!!</h1>
        <h3 className="mt-6 text-2xl">We are almost there</h3>
        <p>Stay tuned for something amazing!</p>
        <div className="mt-6 flex flex-col items-center">
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
        </div>{" "}
      </div>
    </div>
  );
};

export default page;
