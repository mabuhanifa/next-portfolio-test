import Main from "../components/Main";
import Nav from "../components/Nav";


export default function Home() {

  return (
    <div className="text-gray-700 dark:text-white dark:bg-gray-700 bg-gray-100 py-5 px-20">
      <Nav/>
      <Main/>
    </div>
  );
}
