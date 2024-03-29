import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import projects from "../data/projects";

export default function Projects() {
  const { push } = useRouter();
  const pusher = (url) => {
    push(`/projects/${url}`);
  };
  return (
    <div className="2xl:mx-20 ">
      <h1 className="text-3xl font-bold text-center my-10">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:lg:grid-cols-3 gap-5 mt-10">
        {projects.slice(0,6).map((data) => {
          return (
            <div
              className="p-5 bg-white rounded shadow-2xl dark:text-gray-300
               dark:bg-gray-900 dark:shadow-2xl-[#101621]"
              key={data.id}
              onClick={() => {
                pusher(data.id);
              }}
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
              <h1 className="text-2xl font-bold ">{data.name}</h1>
              <p className="py-3">{data.info}</p>
              <div className="flex justify-center">
                <button
                  className="w-full rounded py-2 bg-gray-700 dark:bg-indigo-700
                 dark:text-gray-100 text-gray-50 font-semibold hover:bg-gray-900 dark:hover:bg-indigo-900"
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-10 w-full p-5 ">
        <div>
          <button className="bg-green-700 px-40 py-3 rounded text-white uppercase font-bold">
            <Link href={'/projects'}>
            View All Projects
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
