import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { ImLinkedin } from "react-icons/im";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbSend } from "react-icons/tb";

export default function Main() {
  return (
    <section className="my-5 sm:flex sm:my-40 dark:text-gray-300">
      <div className="sm:p-5 flex items-center">
        {/* -----icons----- */}
        <div className="flex flex-col gap-10 text-2xl sm:mr-20">
          <a
            href="https://www.linkedin.com/in/mohammed-abuhanifa-4611b515b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImLinkedin />
          </a>
          <a
            href="https://github.com/mabuhanifa"
            target="_blank"
            rel="noopener noreferrer"
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
        <div className="sm:hidden w-full flex justify-center items-center px-5">
          <Image
            src="/me.jpg"
            alt="me"
            width={384}
            height={300}
            className="w-96 rounded-xl"
          />
        </div>
      </div>
      <section className="mx-5 xl:mx-20 flex ">
        <div className="w-full mt-20 mb-10">
          <h1 className="text-4xl font-bold my-5">Mohammed Abu Hanifa</h1>
          <p className="text-2xl font-semibold my-2 dash">Web Developer</p>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            illo incidunt autem quia optio soluta atque corrupti! Provident
            accusamus id omnis harum nesciunt blanditiis facilis. illo incidunt
            autem quia optio soluta atque corrupti! Provident accusamus id omnis
            harum nesciunt blanditiis facilis.
          </p>
          <button
            className="px-10 py-5 rounded-2xl bg-gray-700 text-gray-100 my-5
           dark:bg-gray-100 dark:text-gray-700 font-bold"
          >
            Say Hello
            <TbSend className="inline mx-2 text-2xl" />
          </button>
        </div>
        <div className="hidden w-full sm:flex justify-center items-center mx-10">
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
