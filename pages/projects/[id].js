import { useRouter } from "next/router";
import React from "react";
import { data } from "../../data/data";

export default function Project() {
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      Project {id}
      <div>{data.map}</div>
    </div>
  );
}
