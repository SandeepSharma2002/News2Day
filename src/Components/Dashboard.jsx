import React, { useEffect, useState } from "react";
import { FcComments, FcLike, FcNews } from "react-icons/fc";
import { FaExternalLinkAlt } from "react-icons/fa";
import NewsService from "../Services/NewsService";
import { Spinner } from "./Loaders/Spinner";

export const Dashboard = () => {
  const [News, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    NewsService.getNewsBySource("cnn")
      .then((res) => {
        setNews(res.articles);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div className="mx-auto grid place-items-center min-w-full my-10"> <Spinner/></div>
  ) : (
    <div className=" w-full px-2 sm:px-6  mx-auto overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-orange-50 rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">2</div>
              </div>
              <div className="text-sm font-medium text-gray-400">
                Total News
              </div>
            </div>
            <FcNews size={40} />
          </div>
        </div>
        <div className="bg-violet-50 rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">100</div>
              </div>
              <div className="text-sm font-medium text-gray-400">Views</div>
            </div>
            <svg
              height="45px"
              width="80px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 460 460"
              xml:space="preserve"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M110.099,230c0-43.966,25.491-82.397,61.976-103.267C120.489,142.547,74.985,179.07,45.43,230 c29.551,50.923,75.047,87.443,126.625,103.261C135.581,312.383,110.099,273.958,110.099,230z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#6BE0F4" }}
                    d="M294.369,128.828c33.386,21.289,55.532,58.638,55.532,101.172 c0,42.542-22.154,79.896-55.549,101.178c48.93-16.8,91.896-52.374,120.218-101.178C386.252,181.202,343.292,145.63,294.369,128.828 z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#0B389C" }}
                    d="M349.901,230c0-42.535-22.146-79.883-55.532-101.172c-19.98-6.862-40.955-10.586-62.333-10.81 v57.199c1.453,0,2.882,0.074,4.298,0.186c5.696-11.007,16.625-18.447,30.188-18.447c20.136,0,36.522,16.386,36.522,36.522 c0,13.57-7.448,25.429-18.466,31.725c0.127,1.582,0.205,3.18,0.205,4.797c0,30.204-22.543,54.783-52.747,54.783v57.199 c21.372-0.223,42.341-3.946,62.316-10.804C327.747,309.896,349.901,272.542,349.901,230z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#4370D9" }}
                    d="M175.217,230c0-30.204,26.615-54.783,56.819-54.783v-57.199C231.357,118.011,230.679,118,230,118 c-19.793,0-39.257,3.011-57.924,8.733c-36.486,20.869-61.976,59.3-61.976,103.267c0,43.958,25.481,82.383,61.956,103.261 C190.729,338.987,210.2,342,230,342c0.679,0,1.357-0.011,2.036-0.018v-57.199C201.833,284.783,175.217,260.204,175.217,230z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#07215C" }}
                    d="M175.217,230c0,30.204,26.615,54.783,56.819,54.783s52.747-24.579,52.747-54.783 c0-1.617-0.078-3.215-0.205-4.797c-5.33,3.046-11.491,4.797-18.056,4.797c-20.136,0-34.486-16.386-34.486-36.521 c0-6.573,1.538-12.741,4.298-18.075c-1.416-0.112-2.845-0.186-4.298-0.186C201.833,175.217,175.217,199.796,175.217,230z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#FFFFFF" }}
                    d="M266.522,230c6.565,0,12.726-1.751,18.056-4.797c11.017-6.296,18.466-18.154,18.466-31.725 c0-20.136-16.386-36.522-36.522-36.522c-13.563,0-24.492,7.44-30.188,18.447c-2.76,5.334-4.298,11.502-4.298,18.075 C232.036,213.614,246.386,230,266.522,230z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#EF9E8F" }}
                    d="M45.43,230c29.555-50.93,75.059-87.453,126.646-103.267C190.743,121.011,210.207,118,230,118 c0.679,0,1.357,0.011,2.036,0.018c21.378,0.223,42.353,3.948,62.333,10.81C343.292,145.63,386.252,181.202,414.57,230H460 l-4.88-9.29c-22.27-42.44-54.36-78.08-92.8-103.07C322.41,91.71,276.66,78,230,78s-92.41,13.71-132.31,39.64 c-38.45,24.99-70.54,60.63-92.81,103.07L0,230H45.43z"
                  ></path>{" "}
                  <path
                    style={{ fill: "#F57B71" }}
                    d="M414.57,230c-28.321,48.804-71.288,84.378-120.218,101.178 c-19.975,6.858-40.944,10.581-62.316,10.804C231.357,341.989,230.679,342,230,342c-19.8,0-39.271-3.013-57.945-8.739 C120.477,317.443,74.981,280.923,45.43,230H0l4.88,9.29c22.27,42.44,54.36,78.08,92.81,103.07C137.59,368.29,183.34,382,230,382 s92.41-13.71,132.32-39.64c38.44-24.99,70.53-60.63,92.8-103.07L460,230H414.57z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="bg-rose-50 rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-4">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">100</div>
              </div>
              <div className="text-sm font-medium text-gray-400">Likes</div>
            </div>
            <FcLike size={40} />
          </div>
        </div>
        <div className="bg-green-50 rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">100</div>
              <div className="text-sm font-medium text-gray-400">Comments</div>
            </div>

            <FcComments size={40} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="p-6 relative flex flex-col  border border-gray-100 min-w-0 mb-4 lg:mb-0 break-words dark:bg-gray-800 w-full shadow-lg rounded">
          <div className="rounded-t mb-0 px-0">
            <div className="flex flex-wrap items-center px-4 py-2">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                  Account Statistics
                </h3>
              </div>
            </div>
            <div className="block w-full overflow-x-auto ">
              <table className="items-center w-full bg-transparent border-collapse min-w-[480px]">
                <thead>
                  <tr>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Title
                    </th>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Growth
                    </th>
                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      News
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      7
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">30%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div
                              style={{ width: "30%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Views
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      45
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">86%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div
                              style={{ width: "80%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Likes
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      36
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">70%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                            <div
                              style={{ width: "70%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-gray-700 dark:text-gray-100">
                    <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      Comments
                    </th>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      23
                    </td>
                    <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                            <div
                              style={{ width: "60%" }}
                              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
          <div className="flex justify-between mb-4 items-start">
            <div className="font-medium">Top Preformed News</div>
            <button
              type="button"
              className="dropdown-toggle font-semibold px-2 py-1 rounded text-sm text-orange-600 bg-orange-200 hover:text-gray-600"
            >
              View
            </button>
          </div>
          <div className="overflow-x-auto ">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Title
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Published at
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                    Views
                  </th>
                </tr>
              </thead>
              <tbody>
                {News.map(
                  (news, index) =>
                    index < 5 && (
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <a
                              href="#"
                              className="text-gray-600 flex gap-2 text-sm font-medium hover:text-blue-500 max-w-56  text-wrap"
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
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            02-02-2024
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            206
                          </span>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
          <div className="flex justify-between mb-4 items-start">
            <div className="font-medium">Top Commented News</div>
            <button
              type="button"
              className="dropdown-toggle font-semibold px-2 py-1 rounded text-sm text-orange-600 bg-orange-200 hover:text-gray-600"
            >
              View
            </button>
          </div>
          <div className="overflow-x-auto ">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Title
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Published at
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody>
                {News.map(
                  (news, index) =>
                    index < 5 && (
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <a
                              href="#"
                              className="text-gray-600 flex gap-2 text-sm font-medium hover:text-blue-500 max-w-56  text-wrap"
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
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            02-02-2024
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            206
                          </span>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
          <div className="flex justify-between mb-4 items-start">
            <div className="font-medium">Top Shared News</div>
            <button
              type="button"
              className="dropdown-toggle font-semibold px-2 py-1 rounded text-sm text-orange-600 bg-orange-200 hover:text-gray-600"
            >
              View
            </button>
          </div>
          <div className="overflow-x-auto ">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Title
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Published at
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                    Shares
                  </th>
                </tr>
              </thead>
              <tbody>
                {News.map(
                  (news, index) =>
                    index < 5 && (
                      <tr>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <div className="flex items-center">
                            <a
                              href="#"
                              className="text-gray-600 flex gap-2 text-sm font-medium hover:text-blue-500 max-w-56  text-wrap"
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
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            02-02-2024
                          </span>
                        </td>
                        <td className="py-2 px-4 border-b border-b-gray-50">
                          <span className="text-[13px] font-medium text-gray-400">
                            206
                          </span>
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md mb-10">
        <div className="flex justify-between mb-4 items-start">
          <div className="font-medium">Activity</div>
          <button
            type="button"
            className="dropdown-toggle font-semibold px-2 py-1 rounded text-sm text-orange-600 bg-orange-200 hover:text-gray-600"
          >
            View
          </button>
        </div>
        <div className="overflow-auto">
          <table className="w-full min-w-[460px]">
            <thead>
              <tr>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tl-md rounded-bl-md">
                  Title
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left">
                  Publisted At
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  Status
                </th>
                <th className="text-[12px] uppercase tracking-wide font-medium text-gray-400 py-2 px-4 bg-gray-50 text-left rounded-tr-md rounded-br-md">
                  View
                </th>
              </tr>
            </thead>
            <tbody className="">
              {News.map(
                (news, index) =>
                  index < 10 && (
                    <tr>
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
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className="text-[13px] font-medium text-gray-500">
                          12-04-2024
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <span className={`inline-block p-1 rounded  font-medium text-[12px] leading-none ${index %2 === 0 || index %3 === 0 ? " text-indigo-500 bg-indigo-500/10":"text-rose-500 bg-rose-500/10"}`}>
                          {index %2 === 0 || index %3 === 0 ? "Published":"Draft"}
                        </span>
                      </td>
                      <td className="py-2 px-4 border-b border-b-gray-50">
                        <a href={news.url} target="_blank" className="text-lg text-indigo-600 cursor-pointer">
                          <FaExternalLinkAlt />
                        </a>
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
