"use client";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { useUser } from "@/hooks/redux.hook";
import { doctorService } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLocalPharmacy } from "react-icons/md";
import { PiVideoConferenceFill } from "react-icons/pi";

const Home = () => {
  const [doctors, setDoctors] = useState([]);

  const router = useRouter();

  const stacticDoctors = [
    { id: 1, name: "Doctor AB", image: "" },
    { id: 2, name: "Doctor Clef", image: "" },
    { id: 3, name: "Doctor Ayodeji", image: "" },
    { id: 4, name: "Olujide Olubiyi", image: "" },
    { id: 5, name: "Olujide Olubiyi", image: "" },
  ];

  const whatWeOffer = [
    {
      text: "Virtual Consultations",
      route: "/virtual-consultation",
      icon: <FaUserDoctor />,
    },
    {
      text: "Online Pharmacies",
      route: "/online-pharmacy",
      icon: <MdLocalPharmacy />,
    },
    {
      text: "Board Rooms",
      route: "/board-room",
      icon: <PiVideoConferenceFill />,
    },
  ];

  const getDoctors = async () => {
    try {
      const response = await doctorService.getAllDoctors();
      // Filter users whose roles include "Doctor"
      const doctors = response.data.users.filter((user: { roles: string | string[]; }) => user.roles.includes('Doctor'));
      console.log("Doctors:", doctors);
      setDoctors(doctors);  // Set only the filtered doctors
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div className="bg-white min-h-screen text-secondary">
      <Navbar />
      <div className="w-full px-12 my-20">
        {/* <h1 className="text-3xl font-bold">Top</h1> */}
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 lg:flex-row lg:gap-14">
          {doctors.map((item: any, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => {
                router.push(`/doctor/${item.userId}`);
              }}
            >
              <div className="w-52 h-60 border border-primary rounded-lg md:w-72 md:h-80 bg-gray-100"></div>
              <p className="font-bold">{item.firstName} {item.lastName}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="w-full px-12 my-20">
        <h1 className="text-3xl font-bold">Book With</h1>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 lg:flex-row lg:gap-14">
          {doctors.map((item: any, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              onClick={() => {
                router.push(`/doctor/${item.userId}`);
              }}
            >
              <div className="w-52 h-60 border border-primary rounded-lg md:w-72 md:h-80 bg-gray-100"></div>
              <p className="font-bold">{item.firstName} {item.lastName}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="w-full px-12 my-20">
        <h1 className="text-3xl font-bold">Top</h1>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 lg:flex-row lg:gap-14">
          {founders.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="w-52 h-60 border border-primary rounded-lg md:w-72 md:h-80 "></div>

              <p className="font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </div> */}

      <section className="bg-secondary w-4/5 mx-auto my-32 px-14 py-20 text-white flex flex-col items-center gap-3 rounded-lg md:w-3/5">
        <h2 className="text-2xl">What Our Key Feature Offer</h2>

        <div className="mt-14 flex  gap-10">
          {whatWeOffer.map((item, idx) => (
            <button key={idx} className=" hover:text-primary">
              <Link
                href={item.route}
                className="font-raleway flex flex-col items-center gap-3"
              >
                <span className="text-3xl lg:text-4xl">{item.icon}</span>
                <h5>{item.text}</h5>
              </Link>
            </button>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
