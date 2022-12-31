import { useRouter } from "next/router";
import React from "react";
import { data } from "../../data/data";

export default function Project() {
  const {
    query: { id },
  } = useRouter();
  const project = data.find(({ id }) => id === id);
  return (
    <div className="mx-40 h-screen">
      Project {id}
      <div>
        <h1>{project.id}</h1>
      </div>
    </div>
  );
}
