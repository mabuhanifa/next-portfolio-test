import Link from "next/link";
import React from "react";
import { data } from "../../data/data";

export default function Projects() {
  return (
    <div className="mx-20 ">
      <div>
        {data.map((data, i) => {
          return (
            <div key={i}>
              <h1>{data.name}</h1>
              <button className="px-10 py-5">
                <Link href={`projects/${data.id}`}>Details</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
