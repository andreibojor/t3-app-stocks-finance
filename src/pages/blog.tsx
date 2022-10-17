import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { trpc } from "../utils/trpc";

const Profile: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-slate-50">
        <Navbar />
        <main>
          <div className="my-5"></div>
          <div className="custom-shadow container mx-auto flex flex-col items-center justify-center bg-white p-4">
            <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
              Blog
            </h1>
            <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-2 lg:w-2/3">
              {"Hello Moto"}
            </div>
            <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
              {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
