import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { VscLinkExternal } from "react-icons/vsc";
import projects from "../../data/projects";

export default function Project() {
  const {
    query: { id },
  } = useRouter();
  const items = projects.find((project) => project.id == id);
  return (
    <>
      {items && (
        <div className="p-5 sm:px-40 dark:bg-gray-700 dark:text-gray-100 bg-gray-100 text-gray-700">
          <div className="w-full h-full ">
            <h1 className="my-10 text-4xl font-bold"> {items.name}</h1>
            <p className="my-10 text-xl font-bold">{items.info}</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-20 text-blue-500 text-lg font-[500] font-firacode">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={items.link.live}
              >
                Live Website
                <span className="mx-1 my-auto">
                  <VscLinkExternal className="inline ml-2 mb-1" />{" "}
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={items.link.client}
              >
                Client Side Code{" "}
                <span className="mx-1 my-auto">
                  <VscLinkExternal className="inline ml-2 mb-1" />{" "}
                </span>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={items.link.server}
              >
                Server Side Code{" "}
                <span className="mx-1 my-auto">
                  <VscLinkExternal className="inline ml-2 mb-1" />{" "}
                </span>
              </a>
            </div>
            <p className="my-5 text-2xl font-bold">
              Screenshots of the project.
            </p>
            <div className="flex flex-col flex-wrap sm:flex-row justify-center items-center">
              {items.images.map((img, i) => (
                <Image
                  className=" mx-2 p-2 rounded-2xl "
                  src={img}
                  alt=""
                  key={i}
                  height={300}
                  width={400}
                />
              ))}
            </div>
            <div>
              <p className="text-2xl m-4 font-bold">Details</p>
              {items.info_bullets.map((bullet, i) => (
                <ul className="list-disc" key={i}>
                  <li className="my-2 mx-8">{bullet}</li>
                </ul>
              ))}
            </div>

            <h2 className="font-bold text-2xl m-4">Technologies used</h2>
            <div className="w-full grid grid-cols-3 gap-5 sm:flex flex-wrap items-center mx-2 mb-10 font-notosans ">
              {items.tech.map((tech, i) => (
                <p
                  key={i}
                  className="text-sm bg-gray-700 text-gray-100 px-2 py-1 mx-2 rounded
                   dark:bg-gray-100 dark:text-gray-700 font-[500]"
                >
                  {tech.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
