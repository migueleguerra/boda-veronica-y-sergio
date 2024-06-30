"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="col-[full-start/full-end] z-20 py-4 relative">
      <ul className="md:flex justify-center lg:space-x-8 md:space-x-5 text-xl hidden">
        <Link href="/" className="pl-10 absolute top-5 -left-5">
          <Image src="/logo.svg" alt="logo" width={80} height={80} />
        </Link>
        <li>
          <Link href="#itinerario" className="hover:text-[white] font-light">
            Itinerario
          </Link>
        </li>
        <li>
          <Link href="#regalos" className=" hover:text-[white] font-light">
            Mesa de Regalos
          </Link>
        </li>
        <li>
          <Link href="#RSVP" className=" hover:text-[white] font-light">
            RSVP
          </Link>
        </li>
        <li>
          <Link href="#hoteles" className=" hover:text-[white] font-light">
            Galeria
          </Link>
        </li>
        <li>
          <Link
            href="#recomendaciones"
            className=" hover:text-[white] font-light"
          >
            Recomendaciones
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className="col-start-[center-end] flex justify-end pr-4 md:hidden z-30"
      >
        {nav
          ? // <AiOutlineClose
            //   className="cursor-pointer primary-font-color"
            //   size={30}
            // />
            ""
          : // <AiOutlineMenu className="cursor-pointer text-white" size={30} />
            ""}
      </div>
      <div
        className={
          nav
            ? "md:hidden inset-0 flex justify-center text-center w-full h-full bg-[#EAE3D0] fixed"
            : "md:hidden left-[-100%] bg-[#EAE3D0] absolute"
        }
      >
        <ul className="flex flex-col space-y-10 primary-font-color text-2xl font-bold translate-y-[25%]">
          <li>
            <Link onClick={handleNav} href="#itinerario">
              Itinerario
            </Link>
          </li>
          <li>
            <Link onClick={handleNav} href="#regalos">
              Mesa de Regalos
            </Link>
          </li>
          <li>
            <Link onClick={handleNav} href="#RSVP">
              RSVP
            </Link>
          </li>
          <li>
            <Link onClick={handleNav} href="#hoteles">
              Galeria
            </Link>
          </li>
          <li>
            <Link onClick={handleNav} href="#recomendaciones">
              Recomendaciones
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
