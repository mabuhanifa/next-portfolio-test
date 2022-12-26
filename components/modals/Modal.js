import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function Modal({ view, setModal, data }) {
  if (!view) return null;
  const closeModal = (e) => {
    if (e.target.id === "container") {
      setModal((m) => !m);
    }
  };
  return (
    <div
      id="container"
      className="bg-blue-300 bg-opacity-30 backdrop-blur-sm fixed inset-0 flex justify-center items-center z-15 dark:text-gray-300"
      onClick={closeModal}
    >
      <div className="border border-gray-300 bg-white bg-opacity-80 rounded-xl p-10 relative">
        <h1 className="text-2xl">{data}</h1>

        <button
          className="rounded text-red-500 absolute top-2 right-2"
          onClick={() => setModal((m) => !m)}
        >
         <RiCloseCircleLine className="text-2xl"/>
        </button>
      </div>
    </div>
  );
}
