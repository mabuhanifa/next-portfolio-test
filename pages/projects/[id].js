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
            <div className="flex flex-col sm:flex-row text-blue-500 text-lg font-[500] font-firacode">
              <a
                className="flex "
                target="_blank"
                rel="noopener noreferrer"
                href={items.link.live}
              >
                Live Website
                <span className="mx-1 my-auto">
                  <VscLinkExternal />{" "}
                </span>
              </a>
              <a
                className="flex sm:mx-20 my-5 sm:my-0"
                target="_blank"
                rel="noopener noreferrer"
                href={items.link.client}
              >
                Client Side Code{" "}
                <span className="mx-1 my-auto">
                  <VscLinkExternal />{" "}
                </span>
              </a>
              <a
                className="flex "
                target="_blank"
                rel="noopener noreferrer"
                href={items.link.server}
              >
                Server Side Code{" "}
                <span className="mx-1 my-auto">
                  <VscLinkExternal />{" "}
                </span>
              </a>
            </div>
            <p className="my-5 text-2xl font-bold">
              Screenshots of the project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              {items.images.map((img, i) => (
                <img
                  className="w-96 mx-2 p-2 rounded-2xl "
                  src={img}
                  alt=""
                  key={i}
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
            <div className="w-full grid grid-cols-3 gap-5 sm:flex items-center mx-2 mb-10 font-notosans ">
              {items.tech.map((tech, i) => (
                <span className={`text-sm text-[${tech.text}] `} key={i}>
                  <p
                    className={`block mx-2 px-3 py-1.5 rounded-lg bg-[${tech.bg}] `}
                  >
                    {tech.name}
                  </p>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
