import Link from "next/link";
import React from "react";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <div className="2xl:mx-40 ">
      <div className="grid sm:grid-cols-3 gap-3">
        {projects.map((data, i) => {
          return (
            <div
              className="p-5 my-10 bg-white rounded-lg shadow-lg dark:text-gray-300 dark:bg-[#1b232e] dark:shadow-2xl-[#101621]"
              key={i}
            >
              <h1 className="text-3xl font-bold mb-5">{data.name}</h1>
              <p className="py-5">{data.info}</p>
              <div className="flex justify-center">
                <button className="w-full rounded  py-2 bg-gray-700 dark:bg-gray-50 dark:text-gray-700 text-gray-50 font-semibold">
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
