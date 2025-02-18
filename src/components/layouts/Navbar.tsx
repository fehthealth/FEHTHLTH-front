"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";

//svg

import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { useUser } from "@/hooks/redux.hook";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import { FaUserCircle } from "react-icons/fa";

interface Props {
  showLogin?: boolean;
  bgColor?: string;
  color?: string;
  toggleColor?: string;
  logo?: ReactNode;
}
const Navbar = ({ toggleColor, showLogin }: Props) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  // const [heading, setHeading] = useState("");

  const { user } = useUser();

  const router = useRouter();

  const navLinks = [
    {
      text: "Home",
      route: "/",
    },
    {
      text: "Virtual Consultations",
      route: "/virtual-consultation",
    },
    {
      text: "Online Pharmacies",
      route: "/online-pharmacy",
    },
    {
      text: "Board Rooms",
      route: "/board-room",
    },
  ];

  return (
    <nav className="bg-primary w-full h-20 px-5 text-secondary font-grotesk flex justify-center items-center md:h-20 lg:h-28 lg:px-12">
      <h2 className="text-3xl font-bold whitespace-nowrap">Feht Health</h2>

      <div className="w-full h-full flex justify-between items-center">
        <div className="mx-auto text-lg flex items-center gap-5">
          {navLinks.map((item, idx) => (
            <Link href={item.route} key={idx} className="relative group">
              {item.text}
              <span className="bg-secondary w-0 h-[2px] absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div
          className="w-5 flex flex-col gap-1 md:hidden"
          onClick={() => {
            setIsHamburgerOpen(!isHamburgerOpen);
            // setHeading("");
          }}
        >
          <div
            className={`${
              toggleColor ? toggleColor : "bg-white "
            } w-full h-[2px] rounded-full`}
          ></div>
          <div
            className={`${
              toggleColor ? toggleColor : "bg-white "
            } w-full h-[2px] rounded-full`}
          ></div>
          <div
            className={`${
              toggleColor ? toggleColor : "bg-white "
            } w-full h-[2px] rounded-full`}
          ></div>
        </div>
      </div>

      <div className="ml-auto hidden md:flex items-center">
        {/* <NavLink
          color={color}
          setIsHamburgerOpen={setIsHamburgerOpen}
          heading={heading}
          setHeading={setHeading}
        /> */}

        {showLogin ? (
          <div className="ml-5 text-secondary text-base font-raleway flex gap-3 lg:ml-12">
            <button
              className="bg-transparent w-28 h-10 text-green flex justify-center items-center rounded-full border-[1.5px] border-secondary"
              onClick={() => router.push("/auth/sign-in")}
            >
              Sign in
            </button>
            <button
              className="bg-green w-28 h-10 flex justify-center items-center rounded-full border-[1.5px] border-secondary"
              onClick={() => router.push("/auth/sign-up")}
            >
              Sign up
            </button>
          </div>
        ) : Object.keys(user).length > 0 ? (
          <PrimaryButton
            text="Dashboard"
            bgColor="bg-secondary"
            rounded="rounded-full"
            color="text-primary"
            icon={<FaUserCircle />}
            onClick={() => router.push("/admin/dashboard")}
          />
        ) : null}
      </div>
      {/* mobile */}
      {Object.keys(user).length === 0 && (
        <div
          className={`bg-white w-full min-h-screen fixed top-0 flex flex-col duration-500 z-40 md:hidden ${
            isHamburgerOpen ? "left-0" : "-left-full"
          }`}
        >
          <div className="w-full h-20 px-5 flex justify-between items-center">
            <IoClose
              className="text-secondary ml-auto"
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            />
          </div>

          <button
            className="bg-green w-28 h-10 m-7 flex justify-center items-center rounded-3xl border-[1.5px] border-white"
            onClick={() => router.push("/auth/sign-in")}
          >
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
