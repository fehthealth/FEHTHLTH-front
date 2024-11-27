import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

//svg

const Footer = () => {
  return (
    <footer className="bg-white w-full px-7 pt-10 pb-7 text-secondary border-t border-secondary md:px-10">
      <div className="mt-14 flex flex-col justify-between md:flex-row ">
        <div className="mt-16 ml-0 flex flex-col md:mt-0 md:-ml-10 lg:ml-2">
          <h2 className="text-green text-xl font-montserrat font-semibold">
            Contact Us
          </h2>
          <div className="mt-5 text-secondary text-base font-grotesk flex flex-col gap-5">
            <p>abc@feht.com</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:mt-0">
          <h2 className="text-green text-xl font-montserrat font-semibold">
            Company
          </h2>
          <div className="mt-5 text-secondary text-base font-grotesk flex items-start flex-col gap-5">
            <button>
              <Link href="/research-lab"> Research Lab</Link>
            </button>
            <button>
              <Link href="/blog">Blog</Link>
            </button>
            <button>
              <Link href="/about-us">About Us</Link>
            </button>
            <button>
              <Link href="/contact-us">Contact Us</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white w-full h-[1px] mt-20 opacity-50"></div>
      <div className="mt-10 flex flex-col md:items-center md:flex-row">
        <p className="mt-10 text-secondary text-sm font-grotesk md:mt-0">
          Copyright 2024. Feht Health. All Rights Reserved
        </p>

        <div className="mt-10 text-secondary text-base font-grotesk flex items-start flex-row gap-3 md:flex-row md:mt-0 md:gap-12 md:ml-auto lg:ml-28 lg:gap-10">
          <Link href={"/policy"}>Privacy</Link>
          <Link href={"/policy"}>Terms</Link>
        </div>
        <div className="flex gap-16 md:gap-10 md:ml-auto lg:gap-16">
          {/* <Link href={""}>
            <FaFacebook />
          </Link> */}

          <Link href={""} target="_blank">
            <FaInstagram />
          </Link>
          <Link href={""} target="_blank">
            <FaLinkedin />
          </Link>
          <Link href={""} target="_blank">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
