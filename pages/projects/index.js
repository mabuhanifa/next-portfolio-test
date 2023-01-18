import Image from "next/image";
import { useRouter } from "next/router";
import data from "../../data/projects";

function Projects({ projects }) {
  const { push } = useRouter();
  const pusher = (url) => {
    push(`/projects/${url}`);
  };
  return (
    <div className="sm:mx-10 lg:mx-20 xl:mx-28 2xl:mx-40 mb-5 p-10">
      <h1 className="text-3xl font-bold text-center my-10">Projects</h1>
      <div>
        <h1 className="text-xl font-bold text-center my-2">Category</h1>

        <div className="flex justify-center flex-wrap cat-fill gap-x-5 text-sm ">
          <button className="cat-btn">STATIC-HTML</button>
          <button className="cat-btn">JS-DOM</button>
          <button className="cat-btn">FULL-STACK</button>
          <button className="cat-btn">REACT</button>
          <button className="cat-btn">REDUX</button>
          <button className="cat-btn">NODE</button>
          <button className="cat-btn">EXPRESS</button>
          <button className="cat-btn">NEXT</button>
        </div>
      </div>
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {projects.map((data, i) => {
          return (
            <div
              className="p-5 bg-white rounded bg-gray-200 shadow-lg dark:text-gray-300
               dark:bg-[#1b232e] dark:shadow-2xl-[#101621] "
              key={i}
              onClick={() => pusher(data.id)}
            >
              <div className="flex justify-center">
                <Image
                  src={data.img}
                  alt="img"
                  width={400}
                  height={400}
                  className="w-96 h-60 object-cover pb-5 rounded"
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold ">{data.name}</h1>
              <p className="py-3">{data.info}</p>
              <div>
                <h2 className="text-xl font-bold pb-3">Technology Used</h2>
                <div className="text-xs flex flex-wrap pb-5 gap-1">
                  {data.tech.slice(0, 4).map((t, i) => (
                    <>
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-100 px-1.5 py-1 mx-1 rounded dark:bg-gray-100
                         dark:text-gray-700 font-[500]"
                      >
                        {t}
                      </span>
                    </>
                  ))}
                  {data.tech.length >4 && (
                    <span
                      className="bg-gray-700 px-1 py-1 mx-1 rounded dark:bg-gray-100
                     dark:text-blue-500 font-[500] text-blue-300"
                    >
                      +More
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="w-full rounded py-2 bg-gray-700 dark:bg-indigo-700
                 dark:text-gray-100 text-gray-50 font-semibold hover:bg-gray-900 dark:hover:bg-indigo-900"
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;

export async function getStaticProps() {
  return {
    props: {
      projects: data,
    },
  };
}
