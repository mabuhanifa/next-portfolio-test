import Front from "../components/front";
import Projects from "./projects/projects";


export default function Home() {

  return (
    <div className="text-gray-700 dark:text-white dark:bg-gray-700 bg-gray-100 py-5 px-10 sm:px-20">
      <Front/>
      <Projects/>
    </div>
  );
}
