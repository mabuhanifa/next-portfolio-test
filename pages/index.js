import Head from "next/head";
import Front from "../components/front";

export default function Home() {
  return (
    <div className=" px-10 lg:px-20">
      <Head>
        <title>
          Mohammed Abu Hanifa
        </title>
      </Head>
      <Front />
    </div>
  );
}
