import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";

export default function Service({ data }) {
  const { name, info, icon, tech } = data;
  const Icon = icon;
  const [modal, setModal] = useState(false);
  return (
    <div className="p-5 my-5 bg-white rounded shadow-2xl dark:text-gray-300 dark:bg-[#1b232e] dark:shadow-2xl-[#101621]">
      <div className="flex justify-center items-center">
        <Icon className="text-8xl" />
      </div>
      <h1 className="text-xl font-bold my-5">{name}</h1>
      <p>{info}</p>
      <div className="text-xs mt-5 flex flex-wrap gap-1">
        {tech.map((t, i) => (
          <span key={i} className= "bg-gray-700 text-gray-100 p-1.5 mx-2 rounded dark:bg-gray-100 dark:text-gray-700 font-[500]">
            {t.name}
          </span>
        ))}
      </div>

      <button
        onClick={() => setModal(true)}
        className="mt-8 border border-gray-700 hover:bg-gray-700 hover:text-white font-[500]
         dark:border-white p-2 px-10 rounded dark:hover:bg-white dark:hover:text-gray-700"
      >
        View More <BsArrowRight className="inline text-xl mx-2" />{" "}
      </button>

      <Modal view={modal} setModal={setModal} data={data} />
    </div>
  );
}
