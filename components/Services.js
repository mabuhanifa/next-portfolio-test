import React from "react";
import { data } from "../data/data";
import Service from "./modals/Service";
export default function Services() {
  return (
    <div className="dark:text-gray-300 2xl:mx-20 mt-20">
      <h1 className="my-10 text-4xl font-bold text-center">Services</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 place-content-center gap-5">
        {data.map((data, i) => (
          <Service data={data} key={i} />
        ))}
      </div>
    </div>
  );
}
