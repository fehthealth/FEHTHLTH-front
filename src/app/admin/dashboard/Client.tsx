"use client";
import DoctorScreen from "@/components/dashboard/DoctorScreen";
import PatientScreen from "@/components/dashboard/PatientScreen";
import { useUser } from "@/hooks/redux.hook";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Client = () => {
  const { user } = useUser();

  console.log("useUser", user);

  useEffect(() => {
    let userEmail;

    if (typeof user === "string") {
      try {
        userEmail = JSON.parse(user)?.user?.email; // Parse only if it's a JSON string
      } catch (error) {
        console.error("Failed to parse user:", error);
      }
    } else if (user && typeof user === "object") {
      userEmail = user.user.email; // Access the email directly if it's already an object
    }

    if (!userEmail) {
      redirect("/auth/sign-in"); // Redirect if email is not found
    }
  }, [user.user]);
  console.log("user", user)

  // Check if userRole includes "Doctor" or "User"
  const isDoctor = Array.isArray(user.user.roles) && user.user.roles.includes("Doctor");
  const isPharmacist = Array.isArray(user.user.roles) && user.user.roles.includes("Pharmacist");
  console.log("isPharmacist", isPharmacist)

  return (
    <main>
      {isDoctor ? (
        <DoctorScreen />
      ) : isPharmacist ? (
        <PatientScreen />
      ) : null}
    </main>
  );
};

export default Client;