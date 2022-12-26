import React from "react";
import { FaServer } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { MdWeb } from "react-icons/md";
import Service from "./modals/Service";
export default function Services() {
  
  const data = [
    {
      name: "Static Website",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      list:[
        "Static Website can be built with vanilla JavaScript,HTML and CSS",
        "Improved performance for end users compared to dynamic websites",
        "Static Websites are"
        
      ],
      icon: MdWeb,
    },
    {
      name: "Single Page Application",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      icon: IoIosApps,
    },
    {
      name: "Web Application",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos exercitationem accusamus, at placeat cupiditate sint labore voluptatum iusto, quia, voluptatibus fugit doloremque quisquam ducimus explicabo!",
      icon: FaServer,
    },
  ];

  return (
    <div className=" dark:text-gray-300 p-5">
    <h1 className="my-10 text-2xl font-bold text-center">Services</h1>
      <div className="grid sm:grid-cols-3 place-content-center gap-5">
        {data.map((data, i) => (
          <Service data={data} key={i} />
        ))}
        
      </div>
      
    </div>
  );
}
