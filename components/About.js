import Image from "next/image";
import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
export default function About() {
  return (
    <div className="dark:text-gray-300">
      <div>
        <h1 className="text-4xl font-bold text-center pb-10">
          About Me
        </h1>
      </div>
      <div className="sm:grid sm:grid-cols-5 place-content-center">
        <div className="col-span-2 flex justify-center">
        <Image
            src="/me.jpg"
            alt="me"
            width={384}
            height={300}
            className="w-96 rounded-xl object-cover"
          />
        </div>
        <div className="mt-20 col-span-3 p-5 ">
          <p className="text-lg ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium, placeat culpa. Voluptatem ea facilis totam neque, sit
            iste? Voluptatum minus iure magnam dicta, excepturi quam facilis
            quas qui doloremque beatae aliquam soluta sed, molestias fuga
            voluptatibus? Soluta facilis, ipsam blanditiis iure ducimus quia.
            Earum nostrum repellat molestiae, ratione incidunt adipisci.
          </p>
          <button className="px-10 py-5 rounded-2xl bg-gray-700 text-gray-100 my-5 dark:bg-gray-100 dark:text-gray-700 font-bold">
            Download CV <AiOutlineFileText className="text-xl inline" />
          </button>
        </div>
      </div>
    </div>
  );
}
