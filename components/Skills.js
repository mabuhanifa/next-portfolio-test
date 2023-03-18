import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTypescript
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold my-32">
        Skills{" "}
      </h2>
      <div className="mt-20">
        <div className="mx-auto sm:w-full grid grid-cols-3 sm:grid-cols-4 text-6xl sm:text-[100px] place-items-center gap-10 sm:gap-20">
          <span className=" hover:text-orange-600">
            <SiHtml5 />
          </span>
          <span className=" hover:text-blue-500">
            <SiCss3 />
          </span>

          <span className=" hover:text-yellow-400">
            <SiJavascript />
          </span>
          <span className=" hover:text-sky-600">
            <SiTypescript />
          </span>
          <span className=" hover:text-sky-500">
            <SiReact />
          </span>
          <span className=" hover:text-indigo-700">
            <SiRedux />
          </span>
          <span className=" dark:hover:text-gray-200 hover:text-gray-400">
            <SiNextdotjs />
          </span>
          <span className=" hover:text-green-600">
            <SiNodedotjs />
          </span>
          <span className=" hover:text-green-500">
            <SiExpress />
          </span>
          <span className=" hover:text-orange-600">
            <SiGit />
          </span>
          <span className=" hover:text-red-500">
            <SiFirebase />
          </span>

          <span className=" hover:text-green-500">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
