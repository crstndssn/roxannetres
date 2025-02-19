import Link from "next/link";
import React from "react";

const Imagenes = () => {
  return (
    <div className="container mx-auto flex flex-col px-4 py-4 md:py-10 md:px-0 overflow-x-hidden">
      <h2 className="text-3xl text-black dark:text-amarillo font-semibold mb-3">
        imágenes
      </h2>

      <div className="flex md:grid grid-cols-3 gap-5 md:gap-7 overflow-auto pb-3">
        <Link
          href={"/alterocio"}
          className="bg-black dark:bg-[#ED0000] text-[#ED0000] dark:text-black min-h-[180px] min-w-[280px] border-2 border-[#ED0000] dark:border-black rounded-lg p-7 flex justify-center items-center"
        >
          <h2 className="alter-font text-lg flex flex-col">
            <span className="text-[40px] tracking-[-4px]">alter</span>
            <span className="text-[55px] mt-[20px] tracking-[-4px]">ocio</span>
          </h2>
        </Link>

        <div className="bg-[#F6F2E6] border-2 border-[#FECD27] min-h-[180px] rounded-lg p-7 flex justify-center items-center opacity-50">
          <h2 className="kam-font m-0 text-[90px] leading-[90px] uppercase text-[#FECD27] font-bold">
            kam
          </h2>
        </div>

        <div className="bg-[#FFE6F9] border-2 border-[#ED0000] min-h-[180px] rounded-lg p-7 flex justify-center items-center opacity-50">
          <h2 className="roxy-font  m-0 mb-7 text-[90px] leading-[20px] uppercase text-[#ED0000]">
            roxy
          </h2>
        </div>

    {/* <div className="bg-[#FFE6F9] border-2 border-[#ED0000] min-h-[180px] rounded-lg p-7 flex justify-center items-center opacity-50">
          <h2 className="roxy-font  m-0 mb-7 text-[90px] leading-[20px] uppercase text-[#ED0000]">
            <span className="bg">si</span><span className="">embra</span>
          </h2>
        </div> */}

      {/*       <div className="bg-[#FFE6F9] border-2 border-[#ED0000] min-h-[180px] rounded-lg p-7 flex justify-center items-center opacity-50">
          <h2 className="roxy-font  m-0 mb-7 text-[90px] leading-[20px] uppercase text-[#ED0000]">
            selecto huila
          </h2>
        </div>

        <div className="bg-[#FFE6F9] border-2 border-[#ED0000] min-h-[180px] rounded-lg p-7 flex justify-center items-center opacity-50">
          <h2 className="roxy-font  m-0 mb-7 text-[90px] leading-[20px] uppercase text-[#ED0000]">
            bejuco
          </h2>
        </div> */}
      </div>
      <Link
        href={`/imagenes`}
        className="text-lg text-black dark:text-amarillo font-semibold mb-3 text-center py-1 pb-[7px] border border-black dark:border-white mt-3 rounded-lg"
      >
        ver todas
      </Link>
    </div>
  );
};

export default Imagenes;
