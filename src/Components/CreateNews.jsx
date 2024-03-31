import React, { useState } from "react";
import useFormattedDate from "../hooks/useFormattedDate";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSidebarContext } from "../Context/SidebarContest";
import { useNewsContext } from "../Context/NewsContext";

export const CreateNews = () => {
  const { newsData,setNewsData } = useNewsContext();
  const { setActive } = useSidebarContext();
  const [inputValue, setInputValue] = useState();
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(newsData?.urlToImage);
  const pulishedDate = useFormattedDate(Date.now());
  const [formData, setFormData] = useState({
    title: { value: newsData?.title || "", error: false },
    content: { value: newsData?.content || "", error: false },
    categories: { value: newsData?.categories || [], error: false },
  });
  const navigate = useNavigate();
  const { mode } = useParams();

  console.log(newsData);
  console.log(mode);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: { value: newValue, error: newValue.length > 0 ? false : true },
    }));
  };

  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };

    if (selectedFile) {
      if (selectedFile.type.includes("image")) {
        reader.readAsDataURL(selectedFile);
      } else if (selectedFile.type.includes("video")) {
        reader.readAsDataURL(selectedFile);
      }
    }
  };

  const handleCategory = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== "") {
      let temp = [...formData.categories.value, inputValue];
      setFormData((prevState) => ({
        ...prevState,
        categories: { value: temp, error: temp.length > 0 ? false : true },
      }));
      setInputValue("");
    }
  };

  const handleRemoveValue = (index) => {
    let newArray = [...formData.categories.value];
    newArray.splice(index, 1);
    setFormData((prevState) => ({
      ...prevState,
      categories: {
        value: newArray,
        error: newArray.length > 0 ? false : true,
      },
    }));
  };

  const handleSubmit = (e, draft) => {
    e.preventDefault();
    let bool = false;
    let updatedFormData = {};
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const value = formData[key].value;
        let isError = false;
        if (
          !value ||
          (typeof value === "string" && value.trim() === "") ||
          (Array.isArray(value) && value.length === 0)
        ) {
          isError = true;
        }
        updatedFormData[key] = {
          value,
          error: isError,
        };
        if (updatedFormData[key].error) {
          bool = true;
        }
      }
    }
    setFormData(updatedFormData);
    if (bool) {
      return;
    }
    let simplifiedObject = {};
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        simplifiedObject[key] = formData[key].value;
      }
    }
    simplifiedObject = { ...simplifiedObject, file, draft };
    console.log(simplifiedObject);
    !draft
      ? toast.success("News Created Successfull.")
      : toast.success("News Saved as draft.");
      setNewsData({});
    navigate("/");
    setActive("/");
  };

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="p-5">
        <h4 className="text-center text-3xl font-semibold text-indigo-600">
          Create News
        </h4>
        <form className="flex flex-col p-4 gap-6">
          <div>
            <input
              type="text"
              name="title"
              required
              value={formData.title.value}
              onChange={handleInputChange}
              className="text-gray-700 rounded w-full px-4 py-2 border-solid focus:border-indigo-500 outline-indigo-500  border-2 "
              placeholder="Title"
            />
            {formData.title.error && (
              <span className="text-sm text-red-700">Title is required.</span>
            )}
          </div>

          <div>
            <textarea
              cols="10"
              rows="5"
              name="content"
              required
              value={formData.content.value}
              onChange={handleInputChange}
              className="text-gray-700 rounded w-full px-4 py-2 border-solid focus:border-indigo-500 outline-indigo-500  border-2 "
              placeholder="Write news content..."
            ></textarea>
            {formData.content.error && (
              <span className="text-sm text-red-700">Content is required.</span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-4">
              <label htmlFor="input2" className=" flex-1">
                <input
                  id="input2"
                  minLength="5"
                  required={!formData.categories?.value.length}
                  value={inputValue}
                  onChange={handleCategory}
                  className="my-auto py-2 px-4 w-full text-gray-700 border-2 focus:border-indigo-500 rounded outline-indigo-500   dark:bg-gray-500 dark:text-gray-200 dark:placeholder:text-gray-300  dark:border-gray-400"
                  type="text"
                  placeholder="Type Category"
                />
              </label>
              <div
                onClick={handleButtonClick}
                className="w-fit mb-auto text-center py-2 px-5 font-medium bg-indigo-500 text-gray-100 rounded-2xl cursor-pointer hover:bg-indigo-700 hover:text-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50"
              >
                <span>Add</span>
              </div>
            </div>
            {formData.categories.error && (
              <span className="text-sm text-red-700">
                Atleast One category is required.
              </span>
            )}
            {formData.categories?.value.length > 0 && (
              <div className="px-2 pt-2 mt-2 pb-11 mb-3 flex flex-wrap rounded-lg bg-indigo-200 dark:bg-gray-400">
                {formData.categories?.value.map((tag, index) => (
                  <span
                    key={index}
                    className="flex flex-wrap pl-4 pr-2 py-2 m-1 justify-between items-center text-sm font-medium rounded-xl cursor-pointer bg-indigo-500 text-gray-200 hover:bg-indigo-600 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  >
                    {tag}
                    <svg
                      onClick={() => handleRemoveValue(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-3 hover:text-gray-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-fit mx-auto">
            <label
              title="Click to upload"
              htmlFor="button2"
              className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
            >
              <div className="w-max relative">
                <img
                  className="w-12"
                  src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                  alt="file upload icon"
                  width="512"
                  height="512"
                />
              </div>
              <div className="relative">
                {previewURL ? (
                  <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                    file Uploaded
                  </span>
                ) : (
                  <>
                    <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                      Upload a file
                    </span>
                    <span className="mt-0.5 block text-sm text-gray-500">
                      Max 20 MB
                    </span>
                  </>
                )}
              </div>
            </label>
            <input
              className="hidden"
              accept="image/*, video/*"
              onChange={handleFileInputChange}
              type="file"
              name="button2"
              id="button2"
            />
          </div>
        </form>
      </div>
      <div className="p-5 w-full">
        <h4 className="text-center text-3xl font-semibold text-indigo-600 mb-4">
          Preview
        </h4>
        <article className="flex max-w-full sm:max-w-[60%]  lg:max-w-[80%]  xl:max-w-[50%] mx-auto flex-col items-start gap-2">
          {previewURL ? (
            <>
              {file?.type?.includes("image") ? (
                <video
                  controls
                  // className="rounded-xl object-cover sm:aspect-square"
                >
                  <source src={previewURL} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={previewURL}
                  alt="Preview"
                  className="rounded-xl min-w-full overflow-clip sm:aspect-square"
                />
              )}
            </>
          ) : (
            <img
              src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
              alt="Preview"
              className="rounded-xl min-w-full object-cover sm:aspect-square"
            />
          )}
          <div className="flex items-center gap-4">
            <span className="text-gray-500">{pulishedDate}</span>
            {formData?.categories?.value.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {formData?.categories?.value.map((tag, index) => (
                  <span
                    key={index}
                    className="relative z-10 text-sm rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="group relative">
            <h3 className=" text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span>
                <span className="absolute inset-0"></span>
                {formData?.title.value || "Title"}
              </span>
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600 break-all">
              {formData.content.value || "Content"}
            </p>
          </div>
          <div className="relative mt-2 sm:flex justify-between items-end w-full gap-x-4 space-y-2">
            <p className="font-semibold text-gray-900 break-words break-all">
              John Doe
            </p>
            <p className=" text-indigo-600 underline underline-offset-2">
              www.indiatvnews.com
            </p>
          </div>
        </article>
        <div className="flex gap-4 justify-center my-4">
          <button
            onClick={(e) => handleSubmit(e, false)}
            className="w-fit mb-auto text-center py-2 px-5 font-medium bg-indigo-500 text-gray-100 rounded-2xl cursor-pointer hover:bg-indigo-700 hover:text-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          >
            Publish
          </button>
          <button
            onClick={(e) => handleSubmit(e, true)}
            className="w-fit mb-auto text-center py-2 px-5 font-medium bg-red-500 text-gray-100 rounded-2xl cursor-pointer hover:bg-red-700 hover:text-gray-50 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-50"
          >
            Draft
          </button>
        </div>
      </div>
    </div>
  );
};
