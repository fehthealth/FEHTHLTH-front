import React from "react";
import Image from "next/image";

import patientImage from "../../../public/assets/patient-image.png";
import { useUser } from "@/hooks/redux.hook";

const PatientScreen = () => {
  const { user } = useUser();

  return (
    <div className="bg-white p-8 font-raleway text-primary min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">Patient Backend</h1>
        </div>
        <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md">
          Patient Appointments
        </button>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        {/* Patient Info Card */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg">
          <div className="bg-secondary text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Patient Info</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between">
              <span>Profile</span>
              <span>{`${user.firstName} ${user.lastName}`}</span>
            </div>
            <div className="flex justify-between">
              <span>Promo</span>
              <span>Active</span>
            </div>
            <div className="flex justify-between">
              <span>Age</span>
              <span>32</span>
            </div>
            <div className="flex justify-between">
              <span>Gender</span>
              <span>Male</span>
            </div>
          </div>
        </div>

        {/* Patient Image */}
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src={patientImage}
            alt="Patient"
            className="w-52 h-52 rounded-full shadow-md"
          />
        </div>

        {/* Upcoming Appointments Card */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg">
          <div className="bg-secondary text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Upcoming Appointments</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Next appointment scheduled for:</p>
            <h3 className="text-2xl font-bold mt-2">15th Jan, 2025</h3>
            <button className="bg-secondary text-white px-4 py-2 mt-6 rounded-lg shadow-md">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Middle Container */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        {/* Consultation and History */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="bg-secondary text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Consultation and History</h2>
          </div>
          <div className="p-6">
            <div className="flex justify-around">
              <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md">
                Age
              </button>
              <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md">
                Gender
              </button>
              <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md">
                History
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Appointment Details */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="bg-secondary text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Upcoming Appointment Details</h2>
          </div>
          <div className="p-6">
            <p className="text-gray-500">Concurrent appointments section:</p>
            <button className="bg-secondary text-white px-4 py-2 mt-6 rounded-lg shadow-md">
              Add Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Container */}
      <div className="grid grid-cols-3 gap-8">
        {/* Health Records */}
        <div className="bg-white rounded-lg shadow-lg col-span-3">
          <div className="bg-secondary text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Health Records</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between">
              <span>Health Record</span>
              <span>2.2%</span>
            </div>
            <div className="flex justify-between">
              <span>Lab</span>
              <span>2.8%</span>
            </div>
            <div className="flex justify-between">
              <span>Health History</span>
              <span>5.7%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientScreen;
