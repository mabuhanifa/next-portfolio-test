import Image from "next/image";
import React from "react";
import { FiDownload, FiGithub } from "react-icons/fi";
import { ImLinkedin } from "react-icons/im";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function Main() {
  return (
    <section className="my-5 md:grid grid-cols-12 sm:my-28">
      <div className="sm:pl-5 flex items-center col-span-1">
        {/* -----icons----- */}
        <div className="flex flex-col text-2xl sm:mr-20">
          <a
            href="https://www.linkedin.com/in/mohammed-abu-hanifa-4611b515b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin />
          </a>
          <a
            href="https://github.com/mabuhanifa"
            target="_blank"
            rel="noopener noreferrer"
            className="my-12"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.facebook.com/shourov.hanifa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiFacebookCircleLine />
          </a>
        </div>
        <div className="md:hidden w-full flex justify-center items-center px-5">
          <Image
            src="/me.jpg"
            alt="me"
            width={384}
            height={300}
            className="w-96 rounded-xl"
          />
        </div>
      </div>
      <section className="mx-5 xl:mx-10 flex col-span-11">
        <div className="w-full mt-20 mb-10">
          <h1 className="text-4xl font-bold my-5">Mohammed Abu Hanifa</h1>
          <p className="text-2xl font-semibold my-2 dash">Web Developer</p>
          <p className="my-5">
          Hi, I am Mohammed Abu Hanifa, a Full-Stack developer from Dhaka, Bangladesh. I have developed many types of front-ends and full-stack applications. Most of the time, I work with MERN stack technologies.
          </p>

          <a
            href="https://drive.google.com/file/d/1qWb0qVGHICcZZYmd4Kajqg15r355jVNX/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-10 py-5 rounded-2xl bg-gray-700 text-gray-100 my-5
            dark:bg-gray-100 dark:text-gray-700 font-bold"
            >
              Download Resume
              <FiDownload className="inline mx-2 text-xl ml-3 mb-1" />
            </button>
          </a>
        </div>
        <div className="hidden w-full md:flex justify-center items-center mx-10">
          <Image
            src="/me.jpg"
            alt="me"
            width={384}
            height={300}
            className="w-96 rounded-xl"
          />
        </div>
      </section>
    </section>
  );
}
