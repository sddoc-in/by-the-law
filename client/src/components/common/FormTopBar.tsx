import React from "react";
import { motion } from "framer-motion";
import { IoMdRefresh } from "react-icons/io";
import { FaRegFileExcel, FaFileCsv } from "react-icons/fa";
import FormTopBarInterface from "../../interface/FormTopBar";
import { ExcelContext } from "../../context/ExcelContext";
import { AppContext } from "../../context/Context";
import axios from "axios";
import { API_URL } from "../../constants/data";

export default function FormTopBar({
  options,
  refreh,
  data
}: {
  options: FormTopBarInterface[];
  refreh: () => void;
  data: any;
}) {

  const variants = {
    open: { height: "100px" },
    halfOpen: { height: "35px" },
  };
  function onMenuClick(menu: FormTopBarInterface) {
    if (typeof menu.Object === "function") {
      menu.Object();
    }
  }
  return (
    <>
      <motion.div
        id="form-top-bar"
        className="w-[99%] bg-white px-1 py-[2px] m-[7px] rounded-lg  "
        style={{
          boxShadow: "0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.2)",
          outline: "1px solid transparent",
        }}
        variants={variants}
        initial="halfOpen"
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center w-full ">
          <div className="flex justify-start items-start">
            {options.map((option, index) => {
              return (
                <div key={index} className="flex items-center">
                  <div
                    onClick={() => onMenuClick(option)}
                    className="flex items-center cursor-pointer mr-2 text-blue-500"
                  >
                    {option.Icon && <option.Icon className="text-[16px] mr-1" />}
                    <p className=" text-sm">{option.name}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-start items-center">
            <button
              onClick={refreh}
              className="w-fit rounded-full text-blue-500 mr-2  my-2 "
            >
              <IoMdRefresh className="text-lg" />
            </button>
          </div>
        </div>
      </motion.div>
      {Element}
    </>
  );
}
