"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import { doctorService } from "@/utils/api";
import Navbar from "@/components/layouts/Navbar";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import { useRouter } from "next/navigation"; 

interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialty: string;
  bio: string;
  availability: string;
  location: string;
  booking_url: string;
}

const DoctorPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await doctorService.getDoctorById(id);
        setDoctor(response.data);
      } catch (error) {
        setError("Failed to fetch doctor's information. Please try again.");
      }
    };

    fetchDoctor();
  }, [id]);

  if (error) {
    return (
      <div className="bg-secondary w-full h-screen mx-auto flex items-center justify-center">
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="bg-secondary w-full h-screen  mx-auto flex items-center justify-center">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  // Function to handle the button click and redirect to the booking URL
  // const handleBookAppointment = () => {
  //   if (doctor.booking_url) {
  //     window.location.href = doctor.booking_url; // Redirect to booking URL
  //   }
  // };

  const handleBookAppointment = () => {
    if (doctor.booking_url) {
      window.open(doctor.booking_url, "_blank"); // Open the booking URL in a new tab
    }
  };

  return (
    <div className="bg-secondary w-full h-screen  ">
      <Navbar />
      <div className="px-7 mx-auto mt-10 flex flex-col gap-10 lg:flex-row lg:gap-20">
        <div className="h-[80vh] flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-primary font-raleway">
            {doctor.firstName} {doctor.lastName}
          </h1>
          <p className="mt-4 text-lg text-secondary font-grotesk">
            Specialty: <span className="text-black">{doctor.specialty}</span>
          </p>
          <p className="mt-4 text-base text-gray-700 font-raleway">
            {doctor.bio}
          </p>
          <p className="mt-4 text-lg text-secondary font-grotesk">
            Location: <span className="text-black">{doctor.location}</span>
          </p>
        </div>

        <div className="h-[80vh] flex-1 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary font-raleway">
            Availability
          </h2>
          <p className="mt-4 text-lg text-secondary font-grotesk">
            <span className="text-black">{doctor.availability}</span>
          </p>

          <div className="mt-10">
            <PrimaryButton
              text="Book Appointment"
              bgColor="bg-secondary"
              rounded="rounded-lg"
              color="text-primary"
              onClick={handleBookAppointment} // Add onClick handler
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;