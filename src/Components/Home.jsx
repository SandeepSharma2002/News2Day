import React, { useEffect, useRef, useState } from "react";
import { NewsCard } from "./Sub-Components/NewsCard";
import NewsService from "../Services/NewsService";
import { RxCross2 } from "react-icons/rx";
import { FcBiotech, FcDepartment, FcNeutralDecision, FcSportsMode, FcSteam, FcTabletAndroid } from "react-icons/fc";
import { MdHealthAndSafety } from "react-icons/md";
import { NewsCardLoader } from "./Loaders/NewsCardLoader";
import { Spinner } from "./Loaders/Spinner";

export const Home = () => {
  const [News, setNews] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(10);
  const [totalItems, setTotalItems] = useState();
  const [loading, setLoading] = useState(true);
  const [showSource, setShowSource] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [source, setSource] = useState(null);
  const [category, setCategory] = useState(null);
  const observer = useRef();

  const getData = () => {
    setLoading(true);
    if(source)
    {
      NewsService.getNewsBySource(source?.value)
      .then((res) => {
        setNews(res.articles);
        setTotalItems(res.totalResults);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
    else{
      NewsService.getNewsByCategory(category?.label || "business")
      .then((res) => {
        setNews(res.articles);
        setTotalItems(res.totalResults);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    if (displayedItems === totalItems) {
      return;
    }
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setLoading(true);
        setTimeout(() => {
          setDisplayedItems((prevCount) =>
            Math.min(prevCount + 10, News.length)
          );
          setLoading(false);
        }, 1000);
      }
    }, options);

    if (observer.current) {
      observer.current.observe(document.querySelector("#sentinel"));
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [loading, News, displayedItems]);

  console.log(displayedItems);

  useEffect(() => {
    getData();
  }, [category,source]);

  const sourceOptions = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0,0,256,256"
        >
          <g
            fill="#de4242"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M0,17v16h16v-16zM17,17v16h16v-16zM34,17v16.03125h15.9375v-16.03125zM42.40625,20.25c0.33984,-0.01172 0.71875,-0.01172 1.15625,0.03125c0,0 1.07813,0.11328 2.59375,0.75v1.71875c0,0 -1.68359,-1.04297 -3.53125,-1.0625c0,0 -3.4375,-0.05469 -3.59375,3.34375c0,0 -0.125,3.10156 3.5625,3.28125c0,0 1.52734,0.19531 3.625,-1.15625v1.78125c0,0 -2.80078,1.70313 -6.0625,0.40625c0,0 -2.73828,-1.00391 -2.84375,-4.3125c0,0 -0.125,-3.42969 3.53125,-4.5625c0,0 0.54688,-0.18359 1.5625,-0.21875zM4.625,20.34375h3.25c2.94531,0.26953 2.78125,2.5 2.78125,2.5c0.01172,1.35547 -1.1875,1.875 -1.1875,1.875c2.10938,0.53125 2.03125,2.3125 2.03125,2.3125c0,2.64063 -3.125,2.625 -3.125,2.625h-3.75zM21.625,20.34375h3.25c2.94531,0.26953 2.78125,2.5 2.78125,2.5c0.01172,1.35547 -1.1875,1.875 -1.1875,1.875c2.10938,0.53125 2.03125,2.3125 2.03125,2.3125c0,2.64063 -3.125,2.625 -3.125,2.625h-3.75zM6.28125,21.78125v2.40625h1.125c0,0 1.53125,0.00391 1.53125,-1.28125c0,0 0.07422,-1.05078 -1.3125,-1.125zM23.28125,21.78125v2.40625h1.125c0,0 1.53125,0.00391 1.53125,-1.28125c0,0 0.07422,-1.05078 -1.3125,-1.125zM6.28125,25.6875v2.53125h1.75c0,0 1.75,0.09766 1.75,-1.3125c0,0 0.05469,-1.22656 -1.75,-1.21875zM23.28125,25.6875v2.53125h1.75c0,0 1.75,0.09766 1.75,-1.3125c0,0 0.05469,-1.22656 -1.75,-1.21875z"></path>
            </g>
          </g>
        </svg>
      ),
      value: "bbc-news",
      label: "BBC News",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0,0,256,256"
        >
          <g
            fill="#de4242"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.12,5.12)">
              <path d="M0,17v16h16v-16zM17,17v16h16v-16zM34,17v16.03125h15.9375v-16.03125zM42.40625,20.25c0.33984,-0.01172 0.71875,-0.01172 1.15625,0.03125c0,0 1.07813,0.11328 2.59375,0.75v1.71875c0,0 -1.68359,-1.04297 -3.53125,-1.0625c0,0 -3.4375,-0.05469 -3.59375,3.34375c0,0 -0.125,3.10156 3.5625,3.28125c0,0 1.52734,0.19531 3.625,-1.15625v1.78125c0,0 -2.80078,1.70313 -6.0625,0.40625c0,0 -2.73828,-1.00391 -2.84375,-4.3125c0,0 -0.125,-3.42969 3.53125,-4.5625c0,0 0.54688,-0.18359 1.5625,-0.21875zM4.625,20.34375h3.25c2.94531,0.26953 2.78125,2.5 2.78125,2.5c0.01172,1.35547 -1.1875,1.875 -1.1875,1.875c2.10938,0.53125 2.03125,2.3125 2.03125,2.3125c0,2.64063 -3.125,2.625 -3.125,2.625h-3.75zM21.625,20.34375h3.25c2.94531,0.26953 2.78125,2.5 2.78125,2.5c0.01172,1.35547 -1.1875,1.875 -1.1875,1.875c2.10938,0.53125 2.03125,2.3125 2.03125,2.3125c0,2.64063 -3.125,2.625 -3.125,2.625h-3.75zM6.28125,21.78125v2.40625h1.125c0,0 1.53125,0.00391 1.53125,-1.28125c0,0 0.07422,-1.05078 -1.3125,-1.125zM23.28125,21.78125v2.40625h1.125c0,0 1.53125,0.00391 1.53125,-1.28125c0,0 0.07422,-1.05078 -1.3125,-1.125zM6.28125,25.6875v2.53125h1.75c0,0 1.75,0.09766 1.75,-1.3125c0,0 0.05469,-1.22656 -1.75,-1.21875zM23.28125,25.6875v2.53125h1.75c0,0 1.75,0.09766 1.75,-1.3125c0,0 0.05469,-1.22656 -1.75,-1.21875z"></path>
            </g>
          </g>
        </svg>
      ),
      value: "cnn",
      label: "CNN",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 64 64"
        >
          <path
            fill="#8d6c9f"
            d="M51,6H13c-3.85,0-7,3.15-7,7v38c0,3.85,3.15,7,7,7h38c3.85,0,7-3.15,7-7V13 C58,9.15,54.85,6,51,6z M13,56c-2.77,0-5-2.23-5-5V13c0-2.77,2.23-5,5-5h38c2.77,0,5,2.23,5,5v38c0,2.77-2.23,5-5,5H13z"
          ></path>
          <path
            fill="#8d6c9f"
            d="M47,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C48,48.448,47.552,48,47,48z M52,52c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C51,51.552,51.448,52,52,52z M32,48c-0.552,0-1,0.448-1,1v2 c0,0.552,0.448,1,1,1c0.552,0,1-0.448,1-1v-2C33,48.448,32.552,48,32,48z M27,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1 s1-0.448,1-1v-2C28,48.448,27.552,48,27,48z M22,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2 C23,48.448,22.552,48,22,48z M17,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C18,48.448,17.552,48,17,48z M12,52c0.552,0,1-0.448,1-1v-2c0-0.552-0.448-1-1-1s-1,0.448-1,1v2C11,51.552,11.448,52,12,52z M42,48c-0.552,0-1,0.448-1,1v2 c0,0.552,0.448,1,1,1s1-0.448,1-1v-2C43,48.448,42.552,48,42,48z M37,48c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1 s1-0.448,1-1v-2C38,48.448,37.552,48,37,48z"
          ></path>
          <polygon
            fill="#8d6c9f"
            points="13,6.625 18.875,6.625 7,41 7,35.25"
          ></polygon>
          <polygon fill="#8d6c9f" points="24,7 29.875,7 7,44 7,42"></polygon>
          <rect
            width="3.375"
            height="14"
            x="21.625"
            y="18"
            fill="#8d6c9f"
          ></rect>
          <rect width="3.25" height="12" x="11.75" y="34" fill="#8d6c9f"></rect>
          <rect width="3.25" height="12" x="18.75" y="34" fill="#8d6c9f"></rect>
          <polygon
            fill="#8d6c9f"
            points="18.75,46 21.75,46 15,34 12,34"
          ></polygon>
          <polygon fill="#8d6c9f" points="34,46 37,46 34,34 31,34"></polygon>
          <polygon fill="#8d6c9f" points="40,46 43,46 40,34 37,34"></polygon>
          <polygon fill="#8d6c9f" points="37,46 34,46 37,34 40,34"></polygon>
          <polygon fill="#8d6c9f" points="43,46 40,46 43,34 46,34"></polygon>
          <rect width="6" height="3" x="24" y="18" fill="#8d6c9f"></rect>
          <rect width="6" height="3" x="23" y="24" fill="#8d6c9f"></rect>
          <rect width="3" height="12" x="23" y="34" fill="#8d6c9f"></rect>
          <polygon
            fill="#8d6c9f"
            points="25,37 31,37 30.625,34 25,34"
          ></polygon>
          <rect width="5" height="3" x="25" y="38.5" fill="#8d6c9f"></rect>
          <polygon
            fill="#8d6c9f"
            points="25,46 30.625,46 31,43 25,43"
          ></polygon>
          <polygon fill="#8d6c9f" points="50,32 54,32 46,18 42,18"></polygon>
          <polygon fill="#8d6c9f" points="46,32 42,32 50,18 54,18"></polygon>
          <path
            fill="#8d6c9f"
            d="M36.5,18c-3.59,0-6.5,3.13-6.5,7s2.91,7,6.5,7s6.5-3.13,6.5-7S40.09,18,36.5,18z M38,27.5 c0,0.83-0.67,1.5-1.5,1.5S35,28.33,35,27.5v-5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5V27.5z"
          ></path>
          <path
            fill="#8d6c9f"
            d="M50.25,45.909c-1.443,0-3.363-0.646-4.309-3.718l2.867-0.883c0.492,1.601,1.087,1.601,1.441,1.601 c0.376,0,1.25-0.073,1.25-0.75c0-0.33-1.148-0.803-1.835-1.086C48.118,40.436,46,39.562,46,37.25c0-2.173,1.787-3.75,4.25-3.75 c1.628,0,3.655,1.187,4.205,3.386l-2.91,0.729c-0.197-0.787-0.94-1.114-1.295-1.114c-0.051,0-1.25,0.009-1.25,0.75 c0,0.304,1.177,0.789,1.809,1.05c1.558,0.642,3.691,1.521,3.691,3.859C54.5,44.367,52.752,45.909,50.25,45.909z"
          ></path>
        </svg>
      ),
      value: "fox-news",
      label: "Fox News",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="L-XE1-AhSuENmensHMz7Ea_eGZs8grn6szD_gr1"
            x1="-57.494"
            x2="-46.494"
            y1="73.498"
            y2="84.498"
            gradientTransform="translate(68.993 -66.999)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#33c481"></stop>
            <stop offset="1" stop-color="#21a366"></stop>
          </linearGradient>
          <path
            fill="url(#L-XE1-AhSuENmensHMz7Ea_eGZs8grn6szD_gr1)"
            d="M9.999,7.006v23.988c0,1.107,0.9,2.007,2.007,2.007	h23.988c1.107,0,2.007-0.9,2.007-2.007V7.006c0-1.107-0.9-2.007-2.007-2.007H12.006C10.899,4.999,9.999,5.899,9.999,7.006z"
          ></path>
          <path
            fill-opacity=".047"
            d="M37.514,17.545l-9.729-7.271l10.215,1.493l0.001,4.241	L37.514,17.545z"
          ></path>
          <path
            fill-opacity=".071"
            d="M37.514,17.545l-9.729-7.271l10.215,2.132l0.001,3.603	L37.514,17.545z"
          ></path>
          <linearGradient
            id="L-XE1-AhSuENmensHMz7Eb_eGZs8grn6szD_gr2"
            x1="-50.347"
            x2="-31.391"
            y1="70.123"
            y2="89.079"
            gradientTransform="translate(70.438 -57.129)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#f44f5b"></stop>
            <stop offset="1" stop-color="#e5202e"></stop>
          </linearGradient>
          <path
            fill="url(#L-XE1-AhSuENmensHMz7Eb_eGZs8grn6szD_gr2)"
            d="M22.511,10.767l-5.837,21.14	c-0.269,0.976,0.304,1.987,1.279,2.256l20.898,5.769c0.975,0.269,1.985-0.303,2.255-1.279l5.837-21.141	c0.269-0.975-0.304-1.985-1.279-2.255L24.766,9.487C23.791,9.218,22.781,9.791,22.511,10.767z"
          ></path>
          <path
            fill-opacity=".047"
            d="M29.999,15.999l-4-5l1.507-0.753l2.492,0.688	L29.999,15.999z"
          ></path>
          <path
            fill-opacity=".047"
            d="M9.999,12.773L24.201,6.17	c0.916-0.425,2.007-0.027,2.432,0.888l1.407,3.025L9.999,12.773z"
          ></path>
          <path
            fill-opacity=".071"
            d="M9.999,13.309l14.201-6.603	c0.916-0.425,2.007-0.027,2.432,0.888l1.407,3.025L9.999,13.309z"
          ></path>
          <path
            fill-opacity=".071"
            d="M29.999,15.999l-4-5l1.507-0.753l1.84,0.507	L29.999,15.999z"
          ></path>
          <linearGradient
            id="L-XE1-AhSuENmensHMz7Ec_eGZs8grn6szD_gr3"
            x1="-57.175"
            x2="-40.639"
            y1="71.926"
            y2="88.462"
            gradientTransform="translate(61.113 -62.879)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffe074"></stop>
            <stop offset="1" stop-color="#f8cf40"></stop>
          </linearGradient>
          <path
            fill="url(#L-XE1-AhSuENmensHMz7Ec_eGZs8grn6szD_gr3)"
            d="M1.11,17.969l7.489,20.576	c0.345,0.949,1.399,1.44,2.347,1.095l23.384-8.511c0.948-0.345,1.439-1.399,1.093-2.347L27.934,8.205	c-0.345-0.948-1.397-1.439-2.347-1.095L2.204,15.622C1.255,15.967,0.764,17.019,1.11,17.969z"
          ></path>
          <linearGradient
            id="L-XE1-AhSuENmensHMz7Ed_eGZs8grn6szD_gr4"
            x1="-57.523"
            x2="-32.956"
            y1="75.268"
            y2="99.834"
            gradientTransform="translate(67.502 -60.287)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#55adfd"></stop>
            <stop offset="1" stop-color="#438ffd"></stop>
          </linearGradient>
          <path
            fill="url(#L-XE1-AhSuENmensHMz7Ed_eGZs8grn6szD_gr4)"
            d="M5.998,17.006v23.988c0,1.107,0.9,2.007,2.007,2.007	h31.988c1.107,0,2.007-0.9,2.007-2.007V17.006c0-1.107-0.9-2.007-2.007-2.007H8.004C6.898,14.999,5.998,15.899,5.998,17.006z"
          ></path>
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M24.999,25.001v-3.001	h10.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.999z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M24.998,29.999v-3.001	h12.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.998z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M24.999,34.999v-3.001	h10.004c0.549,0,0.997,0.448,0.997,0.997v1.007c0,0.549-0.448,0.997-0.997,0.997H24.999z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M9.994,28.499	c0-3.591,2.913-6.505,6.505-6.505c1.795,0,3.423,0.729,4.6,1.908l-2.121,2.121c-0.635-0.635-1.512-1.029-2.479-1.029	c-1.935,0-3.505,1.572-3.505,3.505c0,1.935,1.571,3.505,3.505,3.505c1.933,0,3.505-1.571,3.505-3.505c0-0.169-0.013-0.336-0.036-0.5	h3.016c0.013,0.165,0.02,0.332,0.02,0.5c0,3.592-2.915,6.505-6.505,6.505C12.907,35.005,9.994,32.091,9.994,28.499z"
            clip-rule="evenodd"
          ></path>
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M16.998,28.001v2.001	h3.001l1-1.003l-1-0.999H16.998z"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      value: "gegoogle-newsneral",
      label: "Google News",
    },
  ];

  const categories = [
    {
      icon: <FcNeutralDecision size={28}/>,
      label: "general",
    },
    {
      icon: <FcSportsMode size={28} />,
      label: "sports",
    },
    {
      icon: <FcBiotech size={28}/>,
      label: "science",
    },
    {
      icon: <MdHealthAndSafety size={28} className="text-red-600"/>,
      label: "health",
    },
    {
      icon: <FcTabletAndroid size={28}/>,
      label: "entertainment",
    },
    {
      icon: <FcDepartment size={28}/>,
      label: "business",
    },
    {
      icon: <FcSteam size={28}/>,
      label: "technology",
    },
  ];

  console.log(source);

  return (
    <div className="bg-white pb-4 sm:pb-10">
      <div className="mx-auto max-w-full px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div class="relative mt-2">
            <label class="block text-base font-medium leading-6 text-gray-900 my-2">
              Source
            </label>
            <div
              className=""
              onBlur={() => setTimeout(() => setShowSource(false), 300)}
            >
              <button
                type="button"
                class="relative w-full h-[52px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                onClick={() => setShowSource(!showSource)}
              >
                <div class="flex items-center">
                  {source?.icon}
                  <span class="font-normal capitalize ml-3 block truncate">
                    {source?.label || "Select Source"}
                  </span>
                </div>
                <span class="absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  {source?.label?.length ? (
                    <RxCross2
                      size={16}
                      className=" text-gray-400 z-10 cursor-pointer"
                      onClick={() => {
                        setSource(null);
                        setShowSource(false);
                      }}
                    />
                  ) : (
                    <svg
                      class="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {showSource && (
                <ul
                  class="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  tabindex="-1"
                >
                  {sourceOptions.map((src) => (
                    <li
                      key={src.label}
                      class={`text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 ${
                        source?.value === src.value ? " bg-gray-100" : ""
                      }`}
                      id="listbox-option-0"
                      role="option"
                      onClick={() => {
                        setSource(src);
                        setShowSource(false);
                      }}
                    >
                      <div class="flex items-center">
                        {src.icon}
                        <span class="font-normal ml-3 block truncate">
                          {src.label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div class="relative mt-2">
            <label class="block text-base font-medium leading-6 text-gray-900 my-2">
              Category
            </label>
            <div
              className=""
              onBlur={() => setTimeout(() => setShowCategory(false), 300)}
            >
              <button
                type="button"
                class="relative w-full h-[52px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                onClick={() => setShowCategory(!showCategory)}
              >
                <div class="flex items-center">
                  {category?.icon}
                  <span class="font-normal capitalize ml-3 block truncate">
                    {category?.label || "Select Category"}
                  </span>
                </div>
                <span class="absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  {category?.label?.length ? (
                    <RxCross2
                      size={16}
                      className=" text-gray-400 z-10 cursor-pointer"
                      onClick={() => {
                        setCategory(null);
                        setShowCategory(false);
                      }}
                    />
                  ) : (
                    <svg
                      class="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {showCategory && (
                <ul
                  class="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  tabindex="-1"
                  role="listbox"
                  aria-labelledby="listbox-label"
                  aria-activedescendant="listbox-option-3"
                >
                  {categories.map((src) => (
                    <li
                      key={src.label}
                      class={`text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9 ${
                        source?.label === src.label ? " bg-gray-100" : ""
                      }`}
                      id="listbox-option-0"
                      role="option"
                      onClick={() => {
                        setCategory(src);
                        setShowCategory(false);
                      }}
                    >
                      <div class="flex items-center">
                        {src.icon}
                        <span class="font-normal capitalize ml-3 block truncate">
                          {src.label}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-4 grid max-w-full grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-12 sm:pt-16 lg:mx-0 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 2xl:grid-cols-4 ">
          {
            News.length === 0 && (sourceOptions.map((item)=><NewsCardLoader key = {item.label}/>))
          }
          {News?.slice(0, displayedItems).map((news) => (
            <NewsCard data={news} />
          ))}
        </div>
        <div
          id="sentinel"
          style={{ height: "10px", background: "transparent" }}
        ></div>
        {(News.length !== 0  && loading) && <div className="col-span-full mx-auto w-fit my-10"> <Spinner/></div>}
        {(News.length !== 0  && displayedItems >= News.length) && <p className=" col-span-full text-center text-gray-500 my-6">No more data.</p>}
      </div>
    </div>
  );
};
