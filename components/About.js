import React from 'react';
import { AiOutlineFileText } from "react-icons/ai";
export default function About() {
  return (
    <div className='p-5 dark:text-gray-300' >
      <div>
        <h1 className='text-2xl font-bold text-gray-700 text-center my-20'>About Me</h1>
      </div>
      <div className='sm:grid sm:grid-cols-5 place-content-center'>
        <div className='col-span-2 flex justify-center'>
        <img
            src="https://avatars.githubusercontent.com/u/90899296?v=4"
            alt=""
            className="w-96 rounded-xl"
          />
        </div>
        <div className='mt-20 col-span-3'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, placeat culpa. Voluptatem ea facilis totam neque, sit iste? Voluptatum minus iure magnam dicta, excepturi quam facilis quas qui doloremque beatae aliquam soluta sed, molestias fuga voluptatibus? Soluta facilis, ipsam blanditiis iure ducimus quia. Earum nostrum repellat molestiae, ratione incidunt adipisci.
          </p>
          <button className="px-10 py-5 rounded-2xl bg-gray-700 text-gray-100 my-5 ">Download CV <AiOutlineFileText className='text-xl inline'/></button>
        </div>
      </div>
    </div>
  )
}
