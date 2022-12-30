import React from "react";
import { data } from "../../data/data";

export default function Projects() {
  return (
    <div className="mx-20">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <div>
        {data.map((d, i) => (
          <div key={i}>{d.name}</div>
        ))}
      </div>
    </div>
  );
}
