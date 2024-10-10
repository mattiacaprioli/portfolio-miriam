"use client";
import React, { useState } from "react";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';

const EmailSection = () => {
  const [state, handleSubmit] = useForm("xyzygojw");
  if (state.succeeded) {
      return (
        <div className="flex items-center justify-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-8 mb-8" role="alert">
          <svg
            className="fill-current w-6 h-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.5-5.5 1.41-1.41L10 12.17l7.09-7.09L18.5 6l-8.5 9z" />
          </svg>
          <p className="font-bold">Email sent successfully!</p>
          <span className="block sm:inline">Thank you for reaching out!</span>
        </div>
      )
  }
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Contattami
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Sono aperta a nuove opportunità di collaborazione! 
          <br />
          Se hai un progetto, una domanda o sei alla ricerca di un Digital Marketing Specialist, non esitare a contattarmi. 
          <br />
          Farò del mio meglio per risponderti al più presto!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.linkedin.com/in/miriamtruiolo/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              La tua e-mail
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="esempio@gmail.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Nome/Azienda
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder=""
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Messaggio
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Come posso aiutarti?"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Invia
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;