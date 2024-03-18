import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import { aboutMe } from "@/lib/interface";

export const revalidate = 30;

async function getData() {
  const query = `
    *[_type == 'jobbie' && name == 'Jacques Van Blokland'] {
      name,
      jobbieDescription,
      linkedin,
      github,
      resume,
      jobbieImage
  }`;
  const data = await client.fetch(query);

  return data;
}

export default async function Page() {
  const data: aboutMe[] = await getData();
  console.log("Data: ", data[0].resume);
  return (
    <div className="h-screen">
      <div className="container m-auto grid md:grid-cols-3 md:grid-rows-3 gap-4 bg-gray-200 dark:bg-gray-800 p-5 mt-5 rounded-lg relative md:h-96">
      <div className="col-span-1 row-start-1 border-solid border-2 border-green-800 bg-slate-400 h-[200px] relative">
        <Image
          src={urlFor(data[0].jobbieImage).url()}
          alt="data[0].name"
          fill
          className="absolute object-cover top-0 left-0 w-full h-full rounded-lg"
        />
      </div>
      <div className="p-4 text-balance md:col-span-2 row-start-2 md:row-start-1 border-solid border-2 border-green-800 rounded-lg h-[200px]">
        <h3>{data[0].jobbieDescription}</h3>
      </div>
      <div className="md:col-span-3 row-start-3 border-solid border-2 border-green-800 rounded-lg h-[75px]">
        <h3 className="text-center mt-2">Links to stuff</h3>
          <div className="flex flex-row place-content-evenly mt-2">
            <div>
              <a href={data[0].linkedin}>LinkedIn</a>
            </div>
            <div>
              <a href={data[0].github}>Github</a>
            </div>
            <div>
              <a href={data[0].resume}>Resume</a>
            </div>
            <div>
              <a href="mailto:jacquesvb@live.com">Email Me</a>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}
