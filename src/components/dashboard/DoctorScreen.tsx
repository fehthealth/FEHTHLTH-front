import React from "react";
import Image from "next/image";

import doctorsImage from "../../../public/assets/doctors-image.png";
import { useUser } from "@/hooks/redux.hook";

const Dashboard = () => {
  const { user } = useUser();

  return (
    <div className="bg-white p-8 font-raleway text-primary min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold">{`${user.firstName} ${user.lastName}`}</h1>
        </div>
        <div className="flex gap-6">
          <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md">
            Doctor&apos;s Backend
          </button>
          <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md">
            Settings
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-8 mb-12">
        {/* Doctor's Image and Today's Appointments */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg">
          <div className="bg-secondary text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Doctor&apos;s Profile</h2>
          </div>
          <div className="p-8 flex">
            <Image
              src={doctorsImage}
              alt="Doctor"
              className="w-52 h-52 rounded-full mr-8"
            />
            <div>
              <h2 className="text-2xl font-bold">Today&apos;s Appointments</h2>
              <p className="text-gray-500 text-lg">View and manage patients</p>
              <div className="mt-6">
                <h3 className="text-4xl font-bold">5</h3>
                <p className="text-gray-500 text-lg">Total Appointments</p>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Notes */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg">
          <div className="bg-secondary text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Patient Notes</h2>
          </div>
          <div className="p-8">
            <ul className="space-y-4 text-lg">
              <li className="flex justify-between">
                <span>Notes</span>
                <span className="text-primary font-bold">2</span>
              </li>
              <li className="flex justify-between">
                <span>Prescriptions</span>
                <span className="text-primary font-bold">4</span>
              </li>
              <li className="flex justify-between">
                <span>Other Notes</span>
                <span className="text-primary font-bold">1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Today's Appointments Main Card */}
        <div className="col-span-1 bg-white rounded-lg shadow-lg">
          <div className="bg-secondary text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Today&apos;s Appointments</h2>
          </div>
          <div className="p-8">
            <p className="text-lg text-gray-500">
              Details about today&apos;s schedule:
            </p>
            <ul className="mt-6 space-y-4 text-lg">
              <li>8:00 AM - John Smith (Follow-up)</li>
              <li>9:30 AM - Sarah Lee (New Consultation)</li>
              <li>11:00 AM - Michael Brown (Check-up)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Patient Notes Section */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-8">
            {/* Patient Note Cards */}
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-secondary text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Patient Notes</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Location: Nearest patient</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg">
              <div className="bg-secondary text-white p-4 rounded-t-lg">
                <h3 className="text-xl font-bold">Today&apos;s Patients</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-500">Details</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prescriptions and Calendar */}
        <div className="col-span-1 grid gap-8">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-secondary text-white p-4 rounded-t-lg">
              <h3 className="text-xl font-bold">Prescriptions</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-500">Update records</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <div className="bg-secondary text-white p-4 rounded-t-lg">
              <h3 className="text-xl font-bold">Calendar</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-500">View upcoming appointments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
