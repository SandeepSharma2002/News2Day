import React, { useEffect, useState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useSidebarContext } from "../Context/SidebarContest";
import { DeleteNewsModal } from "./Sub-Components/DeleteNewsModal";
import NewsService from "../Services/NewsService";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useNewsContext } from "../Context/NewsContext";
import { Spinner } from "./Loaders/Spinner";

export const ManageNews = () => {
  const [showModal, setShowModal] = useState(false);
  const { setActive } = useSidebarContext();
  const [News, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setNewsData } = useNewsContext();

  useEffect(() => {
    NewsService.getNewsBySource("cnn")
      .then((res) => {
        setNews(res.articles);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    "general",
    "sports",
    "science",
    "health",
    "entertainment",
    "business",
    "technology",
  ];

  return (
    <section className="py-1 relative">
      <div className="w-full xl:w-11/12 mb-12 xl:mb-0 px-4 mx-auto">
        <h1 className="text-3xl font-semibold text-indigo-600 mb-6">
          Manage News Feeds
        </h1>
        <div className="relative flex flex-col  break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-0 bg-gray-100">
            <div className="flex flex-wrap flex-col sm:flex-row justify-between gap-2">
              <h3 className="font-semibold text-base whitespace-nowrap">
                News Feeds
              </h3>
              <Link to="/create-news" onClick={() => setActive("/create-news")}>
                <button
                  className="bg-indigo-500 w-fit text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Add
                </button>
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr>
                  <th className="px-2 min-w-24 bg-indigo-50 text-indigo-500 align-middle border border-solid border-indigo-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                    Title
                  </th>
                  <th className="px-2 bg-indigo-50 text-indigo-500 align-middle border border-solid border-indigo-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                    Category
                  </th>
                  <th className="px-2 bg-indigo-50 text-indigo-500 align-middle border border-solid border-indigo-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                    Created At
                  </th>
                  <th className="px-2 bg-indigo-50 text-indigo-500 align-middle border border-solid border-indigo-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                    Status
                  </th>
                  <th className="px-2 bg-indigo-50 text-indigo-500 align-middle border border-solid border-indigo-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <td colspan={5} className="text-center p-10">
                    <Spinner />
                  </td>
                ) : (
                  News.map((news, index) => (
                    <tr key={news.title}>
                      <td className="py-2 px-4 border-b border-b-gray-50 max-w-52">
                        <div className="flex items-center">
                          <a
                            href="#"
                            className="text-gray-600 flex gap-2 text-sm font-medium hover:text-blue-500 text-wrap"
                          >
                            <img
                              src={news.urlToImage}
                              alt=""
                              className="w-20 h-20"
                            />
                            <span className="max-h-20 overflow-hidden">
                              {news.title}
                            </span>
                          </a>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                        <span className="text-[13px] font-medium text-gray-500">
                          {categories[Math.floor(Math.random() * 7)]}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                        <span className="text-[13px] font-medium text-gray-500">
                          {news.publishedAt.split("T")[0]}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50 text-center">
                        <span
                          className={`inline-block p-1 rounded  font-medium text-[12px] leading-none ${
                            index % 2 === 0 || index % 3 === 0
                              ? " text-indigo-500 bg-indigo-500/10"
                              : "text-rose-500 bg-rose-500/10"
                          }`}
                        >
                          {index % 2 === 0 || index % 3 === 0
                            ? "Published"
                            : "Draft"}
                        </span>
                      </td>

                      <td className="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center">
                        <div className="flex gap-2 justify-center">
                          <Link
                            to="/create-news?mode=edit"
                            onClick={() => {
                              setActive("/create-news");
                              setNewsData({
                                ...news,
                                categories: [
                                  categories[Math.floor(Math.random() * 7)],
                                  categories[Math.floor(Math.random() * 7)],
                                ],
                              });
                            }}
                          >
                            <BiSolidEdit
                              size={22}
                              className=" text-indigo-500 hover:cursor-pointer"
                            />
                          </Link>
                          <MdDeleteForever
                            onClick={() => setShowModal(true)}
                            size={22}
                            className=" text-red-500 hover:cursor-pointer"
                          />
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showModal && <DeleteNewsModal setShowModal={setShowModal} />}
    </section>
  );
};
