import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Image from "next/image";

export default function Home() {
  const founders = [
    { name: "Doctor AB", image: "" },
    { name: "Doctor Clef", image: "" },
    { name: "Doctor Ayodeji", image: "" },
    { name: "Olujide Olubiyi", image: "" },
    { name: "Olujide Olubiyi", image: "" },
  ];

  return (
    <div className="bg-white min-h-screen text-secondary">
      <Navbar />
      <div className="w-full px-12 my-20">
        <h1 className="text-3xl font-bold">Top</h1>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 lg:flex-row lg:gap-14">
          {founders.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="w-52 h-60 border border-primary rounded-lg md:w-72 md:h-80 "></div>

              <p className="font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-12 my-20">
        <h1 className="text-3xl font-bold">Book With</h1>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 lg:flex-row lg:gap-14">
          {founders.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="w-52 h-60 border border-primary rounded-lg md:w-72 md:h-80 "></div>

              <p className="font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-12 my-20">
        <h1 className="text-3xl font-bold">Top</h1>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-8 lg:flex-row lg:gap-14">
          {founders.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="w-52 h-60 border border-primary rounded-lg md:w-72 md:h-80 "></div>

              <p className="font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
