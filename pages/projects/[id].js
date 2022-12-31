import { useRouter } from "next/router";
import React from "react";
import { data } from "../../data/data";

export default function Project() {
  const {
    query: { id },
  } = useRouter();
  const project = data.find(({ id }) => id === id);
  // const [items, setItems] = useState(
  //   projects.filter((project) => project.name === name)[0]
  // );
  return (
    <div className="min-h-screen px-10 sm:px-28 dark:bg-gray-700 dark:text-gray-100 bg-gray-100 text-gray-700">
      Project {id}
      <div>
        <h1>{project.id}</h1>
      </div>
    </div>
  );
}
