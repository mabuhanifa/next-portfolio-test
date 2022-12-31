import Link from "next/link";
import React from "react";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <div className="mx-40 ">
      <div className="flex justify-between ">
        {projects.map((data, i) => {
          return (
            <div
              className="p-5 my-10 bg-white rounded-lg shadow-lg dark:text-gray-300 dark:bg-[#1b232e] dark:shadow-2xl-[#101621]"
              key={i}
            >
              <h1>{data.name}</h1>
              <button className="rounded px-20 py-2 bg-gray-700 dark:bg-gray-50 dark:text-gray-700 text-gray-50 font-semibold">
                <Link href={`projects/${data.id}`}>Details</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
