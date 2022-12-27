import React from "react";
import { VscChromeClose } from "react-icons/vsc";

export default function Modal({ view, setModal, data }) {
  const { name, info, icon, list } = data;
  if (!view) return null;
  const closeModal = (e) => {
    if (e.target.id === "container") {
      setModal((m) => !m);
    }
  };

  return (
    <div
      id="container"
      className="mx-5 bg-opacity-30 backdrop-blur-sm fixed inset-0 flex justify-center items-center z-15 dark:text-gray-100"
      onClick={closeModal}
    >
      <div className="border border-gray-700 bg-gray-700 text-white dark:border-white dark:bg-white dark:text-gray-700 rounded-xl p-10 relative">
        <h1 className="text-2xl font-bold mb-10">{name}</h1>
        <p>{info}</p>
        <ol className="list-decimal px-5">
          {list.map((l, i) => (
            <li key={i} className="my-5 font-[500]">
              {l}
            </li>
          ))}
        </ol>

        <button
          className=" text-red-500 absolute top-2 right-2 bg-red-200 p-2 rounded-full hover:bg-red-300"
          onClick={() => setModal((m) => !m)}
        >
          <VscChromeClose className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
