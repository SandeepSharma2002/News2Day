import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Pie, Line, Bar, Doughnut } from "react-chartjs-2";
import { FcIphone, FcLike, FcPhoneAndroid } from "react-icons/fc";
import { FaUsers } from "react-icons/fa";
import { TbUsersPlus } from "react-icons/tb";
import { pieData, barData, doughnutData, lineData } from "../assets/data";

const barOptions = {
  title: {
    display: true,
    text: "News feed Data",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const doughnutOptions = {
  title: {
    display: true,
    text: "News Categories",
  },
};

export const Performance = () => {
  return (
    <section className="flex flex-col gap-6 px-2 sm:px-6 mb-6 mx-auto">
      <div className="grid sm:grid-cols-2 ld:grid-cols-4 gap-6 mb-6">
        <div className="bg-orange-50 rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">2</div>
              </div>
              <div className="text-sm font-medium text-gray-400">
                Total Users
              </div>
            </div>
            <FaUsers size={40} />
          </div>
        </div>
        <div className="bg-green-50 rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-2xl font-semibold mb-1">100</div>
              <div className="text-sm font-medium text-gray-400">New Users</div>
            </div>

            <TbUsersPlus size={40} />
          </div>
        </div>
        <div className="bg-violet-50 rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">100</div>
              </div>
              <div className="text-sm font-medium text-gray-400">
                Mobile users
              </div>
            </div>
            <FcPhoneAndroid size={48} />
          </div>
        </div>
        <div className="bg-rose-50 rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
          <div className="flex justify-between mb-4">
            <div>
              <div className="flex items-center mb-1">
                <div className="text-2xl font-semibold">100</div>
              </div>
              <div className="text-sm font-medium text-gray-400">
                Desktop Users
              </div>
            </div>
            <FcLike size={40} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-6 xl:gap-6 ">
        <div class="bg-white border border-gray-100 rounded-xl xl:order-10 overflow-hidden mx-auto text-gray-900 font-semibold text-center min-w-full">
          <div class="flex items-center justify-around">
            <div class="text-lg pt-2">May, 2020</div>
          </div>
          <div class="grid grid-cols-7 grid-col-dense grid-rows-6 p-6 gap-1">
            <div class="text-indigo-600">Mon</div>
            <div class="text-indigo-600">Tue</div>
            <div class="text-indigo-600">Wed</div>
            <div class="text-indigo-600">Thu</div>
            <div class="text-indigo-600">Fri</div>
            <div class="text-indigo-600">Sat</div>
            <div class="text-indigo-600">Sun</div>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              27
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              28
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              29
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              30
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              1
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              2
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              3
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              4
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              5
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              6
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              7
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              8
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              9
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              10
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              11
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              12
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              13
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              14
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              15
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              16
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              17
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              18
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              19
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              20
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              21
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              22
            </a>
            <a
              href="#"
              class="hover:bg-indigo-600 rounded-md p-2 bg-indigo-500 text-white"
            >
              23
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              24
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              25
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              26
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              27
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              28
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              29
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              30
            </a>
            <a href="#" class="hover:bg-indigo-100 rounded-md p-2">
              31
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              1
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              2
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              3
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              4
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              5
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              6
            </a>
            <a
              href="#"
              class="hover:bg-indigo-100 rounded-md p-2 text-gray-500"
            >
              7
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 col-span-2">
          <div className="border border-gray-100 rounded-xl p-4 min-w-full">
            <h2 className="text-2xl font-bold mb-2">Account Analytics</h2>
            <Pie data={pieData} />
          </div>
          <div className="border border-gray-100 rounded-xl p-4 min-w-full">
            <h2 className="text-2xl font-bold mb-2">News Categories</h2>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>
      </div>
      <div className=" overflow-x-auto">
        <div className="border border-gray-100 rounded-xl p-4 min-w-[480px]">
          <h2 className="text-2xl font-bold mb-2">News Analytics</h2>
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
      <div className=" overflow-x-auto">
      <div className="border border-gray-100 rounded-xl p-4 min-w-[480px]">
        <h2 className="text-2xl font-bold mb-2">Reations Analytics</h2>
        <Line data={lineData} />
      </div>
      </div>
    </section>
  );
};
