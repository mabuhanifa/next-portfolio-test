import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <div className="2xl:mx-40 ">
      <h1 className="text-3xl font-bold text-center my-10">Projects</h1>
      <div className="grid sm:grid-cols-3 gap-5">
        {projects.map((data, i) => {
          return (
            <div
              className="p-5 my-10 bg-white rounded-lg shadow-lg dark:text-gray-300
               dark:bg-[#1b232e] dark:shadow-2xl-[#101621]"
              key={i}
            >
              <div className="flex justify-center">
                <Image
                  src={data.img}
                  alt="img"
                  width={400}
                  height={400}
                  className="w-96 h-60 object-cover pb-5 rounded"
                />
              </div>
              <h1 className="text-3xl font-bold ">{data.name}</h1>
              <p className="py-5">{data.info}</p>
              <div className="flex justify-center">
                <button
                  className="w-full rounded py-2 bg-gray-700 dark:bg-indigo-700
                 dark:text-gray-100 text-gray-50 font-semibold hover:bg-gray-900 dark:hover:bg-indigo-900"
                >
                  <Link href={`projects/${data.id}`}>Details</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
