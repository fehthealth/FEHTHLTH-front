"use client";
import DoctorScreen from "@/components/dashboard/DoctorScreen";
import PatientScreen from "@/components/dashboard/PatientScreen";
import { useUser } from "@/hooks/redux.hook";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Client = () => {
  const { user } = useUser();

  useEffect(() => {
    let userEmail;

    if (typeof user === "string") {
      try {
        userEmail = JSON.parse(user)?.user?.email;
      } catch (error) {
        console.error("Failed to parse user:", error);
      }
    } else if (user && typeof user === "object") {
      userEmail = user.user.email;
    }

    if (!userEmail) {
      redirect("/auth/sign-in");
    }
  }, [user.user]);

  const isDoctor =
    Array.isArray(user.user.roles) && user.user.roles.includes("Doctor");
  const isPharmacist =
    Array.isArray(user.user.roles) && user.user.roles.includes("Pharmacist");

  return (
    <main>
      {isDoctor ? <DoctorScreen /> : isPharmacist ? <PatientScreen /> : null}
    </main>
  );
};

export default Client;
