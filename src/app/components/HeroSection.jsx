"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-14 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="pb-8 col-span-8 place-self-center text-center sm:text-left justify-self-start" >
          <h1 className="text-white mb-8 text-4xl sm:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Miriam Truiolo{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Digital Marketing Specialist",
                1000,
                "Copywriter",
                1000,
              ]}
              wrapper="span"
              speed={500}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-base mb-8 ">
            Il mondo del marketing offre la possibilità di migliorare la vita delle persone, tramite piccole esperienze
            quotidiane. 
            <br />
            Attraverso la comunicazione, mi piace pensare che grazie al mio portatile riesco
            a far sorridere qualcuno, anche dall’altra parte del mondo.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contattami
            </Link>
            <Link
              href="../../../public/documents/CVMiriamTruiolo.pdf"
              download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Scarica CV
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0" >
          <div
            className="rounded-full bg-cover bg-center w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
            style={{ backgroundImage: "url('/images/MiriamTruiolo.jpeg')" }}
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;