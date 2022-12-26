import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Modal from "./Modal";

export default function Service({ data: { name, info, icon } }) {
  const Icon = icon;
  const [modal, setModal] = useState(false);
  return (
    <div className="p-5 my-10 bg-white rounded-lg shadow-lg dark:text-gray-300 dark:bg-[#1b232e] dark:shadow-2xl-[#101621]">
      <div className="flex justify-center items-center">
        <Icon className="text-8xl text-gray-700" />
      </div>
      <h1 className="text-xl font-bold text-slate-700 my-5">{name}</h1>
      <p>{info}</p>

      <button
        onClick={() => setModal(true)}
        className=" my-5 border border-gray-500 p-2 rounded"
      >
        View More <BsArrowRight className="inline text-xl mx-2" />{" "}
      </button>

      <Modal view={modal} setModal={setModal} data={name} />
    </div>
  );
}
