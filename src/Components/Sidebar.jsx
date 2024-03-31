import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDashboardCustomize } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useSidebarContext } from "../Context/SidebarContest";

const items = [
  {
    icon: <FaHome size={20} />,
    text: "Home",
    to: "/",
  },
  {
    icon: <MdDashboardCustomize size={20} />,
    text: "Dashboard",
    to: "/dashboard",
  },
  {
    icon: <IoCreateOutline size={20} />,
    text: "Create News",
    to: "/create-news",
  },
  {
    icon: <MdManageSearch size={20} />,
    text: "Manage News",
    to: "/manage-news",
  },
  {
    icon: <CgPerformance size={20} />,
    text: "Performance Reports",
    to: "/performance",
  },
];

export default function Sidebar() {
  const { expanded, setExpanded } = useSidebarContext();

  return (
    <aside
      className={`h-screen max-w-80 ${
        expanded ? "absolute" : ""
      }   lg:sticky top-0 z-30 `}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex items-center">
          <div className="flex-1 flex justify-center">
            <Link to="/">
              <img
                src={Logo}
                className={`overflow-hidden transition-all flex-1 ${
                  expanded ? "w-32" : "w-0 duration-0 lg:duration-150"
                }`}
                alt=""
              />
            </Link>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5  rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <TfiArrowCircleLeft /> : <TfiArrowCircleRight />}
          </button>
        </div>
        <ul className="flex-1 px-3">
          {items.map((option) => (
            <SidebarItem
              key={option.text}
              to={option.to}
              icon={option.icon}
              text={option.text}
            />
          ))}
        </ul>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0 duration-0 lg:duration-150"
              }
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <HiOutlineDotsVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, alert, to }) {
  const { active, setActive, expanded } = useSidebarContext();
  return (
    <Link key={text} to={to}>
      <li
        className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active === to
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
        onClick={() => setActive(to)}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all whitespace-nowrap ${
            expanded ? "w-52 ml-3 " : "w-0 duration-0 lg:duration-150"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all duration-0
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}
