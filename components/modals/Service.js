import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";

export default function Service({ data }) {
  const { name, info, icon } = data;
  const Icon = icon;
  const [modal, setModal] = useState(false);
  return (
    <div className="p-5 my-10 bg-white rounded-lg shadow-lg dark:text-gray-300 dark:bg-[#1b232e] dark:shadow-2xl-[#101621]">
      <div className="flex justify-center items-center">
        <Icon className="text-8xl" />
      </div>
      <h1 className="text-xl font-bold my-5">{name}</h1>
      <p>{info}</p>

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
