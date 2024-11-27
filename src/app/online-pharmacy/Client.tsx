import React from "react";
import Image from "next/image";

import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

import pharm1 from "../../../public/assets/pharm1.png";
import pharm2 from "../../../public/assets/pharm2.png";
import pharm3 from "../../../public/assets/pharm3.png";

const OnlinePharmacyClient = () => {
  const pharmacies = [
    { name: "Health Hub", location: "Lagos", image: pharm1 },
    { name: "Tag Pharmaceutical", location: "Lagos", image: pharm2 },
    { name: "Wellness Warehouse", location: "Abuja", image: pharm3 },
    { name: "Pharma Paradise", location: "Port Harcourt", image: pharm1 },
    { name: "Pharmiq", location: "Ibadan", image: pharm2 },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-white w-full px-12 py-20 text-secondary">
        <h1 className="text-3xl font-bold">Top Pharmacies</h1>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 lg:flex-row lg:gap-14">
          {pharmacies.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="w-52 h-60 border flex items-center justify-center border-primary rounded-lg md:w-72 md:h-80 ">
                <Image
                  src={item.image}
                  alt={`${item.name} logo`}
                  className="w-4/5"
                />
              </div>

              <p className="font-bold">{item.name}</p>
              <p>{item.location}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default OnlinePharmacyClient;
