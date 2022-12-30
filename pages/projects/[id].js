import { useRouter } from "next/router";
import React from "react";
import { data } from "../../data/data";

export default function Project() {
  const {
    query: { id },
  } = useRouter();
  const raw = data.find(({ id }) => id === id);
  return (
    <div>
      Project {id}
      <div>
        
            
              <h1>{raw.id}</h1>
            
         
      </div>
    </div>
  );
}
