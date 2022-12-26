import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TbSend } from "react-icons/tb";

export default function Main() {
  return (
    <section className="p-5 sm:flex sm:my-40 dark:text-gray-300">
      <div className="p-5 flex items-center">
        {/* -----icons----- */}
        <div className="flex flex-col gap-10 text-2xl sm:mr-20">
          <span>
            <FiInstagram />
          </span>
          <span>
            <FiGithub />
          </span>
          <span>
            <RiFacebookCircleLine />
          </span>
        </div>
        <div className="sm:hidden w-full flex justify-center items-center mx-10">
          <img
            src="https://avatars.githubusercontent.com/u/90899296?v=4"
            alt=""
            className="w-96 rounded-xl"
          />
        </div>
      </div>
      <section className="mx-5 xl:mx-20 flex ">
        <div className="w-full my-20">
          <h1 className="text-4xl font-bold">Mohammed Abu Hanifa</h1>
          <p className="text-2xl font-semibold my-2 dash">Web Developer</p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            illo incidunt autem quia optio soluta atque corrupti! Provident
            accusamus id omnis harum nesciunt blanditiis facilis.
          </p>
          <button className="px-10 py-5 rounded-2xl bg-gray-700 text-gray-100 my-5 ">
            Say Hello
            <TbSend className="inline mx-2 text-2xl" />
          </button>
        </div>
        <div className="hidden w-full sm:flex justify-center items-center mx-10">
          <img
            src="https://avatars.githubusercontent.com/u/90899296?v=4"
            alt=""
            className="w-96 rounded-xl"
          />
        </div>
      </section>
    </section>
  );
}
