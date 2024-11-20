import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import React from "react";

const page = () => {
  const founders = [
    { name: "Dami Watti", role: "CEO", image: "" },
    { name: "Maryam Olagunju", role: "COO", image: "" },
    { name: "Ayodeji Babalola", role: "CTO", image: "" },
    { name: "Olujide Olubiyi", role: "CHO", image: "" },
  ];
  return (
    <main className="bg-white min-h-screen text-secondary font-grotesk">
      <Navbar />

      <div className="px-12 pt-12">
        <h1 className="text-3xl font-bold">About Us</h1>

        <div className="mt-10 flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <p className="text-lg leading-10">
            Our first goal is to connect health-care players on one global
            platform showing them why this is valuable for them and their
            patients. In order to achieve this, we provide a platform where
            Patients can connect to several Medical practitioners as well as
            purchase pharmaceutical products or/and tele-medical devices on our
            platforms and also to easily locate the nearest medical center to
            them in cases of emergencies.
          </p>

          <p className="text-lg leading-10">
            Our Second goal is to Launch our R&D health-care solutions. Our
            approach to healthcare management embraces a holistic philosophy
            that not only prioritizes the best and most cost-effective
            therapeutic intervention, we additionally commit resources towards
            the development of novel medicines where none exists, or where
            available treatment options are beyond the reach of the patient. An
            example is our R&D portfolio for Sickle Cell disease drug
            development where we are leveraging on a state-of-the-art
            technology-driven approach in identifying plant-derived anti-
            sickling phytomedicines.
          </p>
        </div>
      </div>

      <div className="w-full px-12 my-20">
        <h1 className="text-3xl font-bold">Meet our Founders</h1>

        <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-14">
          {founders.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="w-72 h-80 border border-primary rounded-lg"></div>

              <div className="flex flex-col gap-1">
                <p className="font-bold">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
