import Link from "next/link";
import React from "react";
import { data } from "../../data/data";

export default function Projects() {
  return (
    <div className="mx-40 bg-gray-800">
      <div className="flex justify-between">
        {data.map((data, i) => {
          return (
            <div key={i}>
              <h1>{data.name}</h1>
              <button className="px-20 py-2 bg-gray-700 dark:bg-gray-50 dark:text-gray-700 text-gray-50 font-semibold">
                <Link href={`projects/${data.id}`}>Details</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
