import React from "react";
import Sidebar from "./Components/Sidebar";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { CreateNews } from "./Components/CreateNews";
import { Performance } from "./Components/Performance";
import { ManageNews } from "./Components/ManageNews";
import { Home } from "./Components/Home";
import { Dashboard } from "./Components/Dashboard";
import { useSidebarContext } from "./Context/SidebarContest";

export const App = () => {
const {expanded} = useSidebarContext()

  return (
    <div className="flex w-screen h-screen relative">
        <Sidebar />
      <div className=" flex flex-col flex-1  overflow-x-hidden">
        <Navbar />
        <div className="pt-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-news" element={<CreateNews />} />
            <Route path="/manage-news" element={<ManageNews />} />
            <Route path="/performance" element={<Performance />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
