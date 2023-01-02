import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <div className="2xl:mx-40 ">
      <h1 className="text-3xl font-bold text-center my-10">Projects</h1>
      <div>
        <h1 className="text-2xl font-bold text-center my-10">Category</h1>

        <div>
          <button>HTML</button>
          <button>DOM</button>
          <button>REACT</button>
          <button>REDUX</button>
          <button>NODE</button>
          <button>EXPRESS</button>
          <button>NEXT</button>
          <button>FULL-STACK</button>
        </div>
      </div>
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
              <p className="py-3">{data.info}</p>
              <div>
                <h2 className="text-xl font-bold pb-3">Technology Used</h2>
                <div className="text-xs flex flex-wrap pb-5 gap-1">
                  {data.tech.slice(0, 4).map((t, i) => (
                    <>
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-100 px-1.5 py-1 mx-1 rounded dark:bg-gray-100
                         dark:text-gray-700 font-[500]"
                      >
                        {t.name}
                      </span>
                    </>
                  ))}
                  <span
                    className="bg-gray-700 px-1 py-1 mx-1 rounded dark:bg-gray-100
                     dark:text-blue-500 font-[500] text-blue-300"
                  >
                    +More
                  </span>
                </div>
              </div>
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
