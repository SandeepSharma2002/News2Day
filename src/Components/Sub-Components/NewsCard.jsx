import React from "react";
import useFormattedDate from "../../hooks/useFormattedDate";
import { LuImageOff } from "react-icons/lu";

export const NewsCard = ({ data, category }) => {
  const pulishedDate = useFormattedDate(data?.publishedAt);
  return (
    <article className="flex min-w-full max-w-xl flex-col items-start gap-2 relative">
      <img
        loading="lazy"
        src={data?.urlToImage}
        alt=""
        className="rounded bg-cover bg-no-repeat bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWSxsVpAmqb_T7CLGolJ193Bw9xh7X7r0yQ&usqp=CAU')] overflow-clip min-w-full min-h-[180px] sm:aspect-square z-10"
      />
      <div className="flex items-center gap-x-4 text-xs z-1">
        <span className="text-gray-500">{pulishedDate}</span>
        <a
          href="#"
          className="relative capitalize z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {category?.label || "General"}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a href={data?.url} target="blank">
            <span className="absolute inset-0"></span>
            {data.title}
          </a>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
          {data.description || data.content}
        </p>
      </div>
      <div className="relative mt-2 sm:flex justify-between items-end w-full gap-x-4 space-y-2">
        <p className="font-semibold text-gray-900 break-words break-all">
          {data.author}
        </p>
        <p className=" text-indigo-600 underline underline-offset-2">
          <a href={data?.url} target="blank">
            {data?.source?.name}
          </a>{" "}
        </p>
      </div>
    </article>
  );
};
