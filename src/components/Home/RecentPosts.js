import { sortBlogs } from "@/src/utils";
import Link from "next/link";
import React from "react";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  // Asegúrate de que la cantidad de blogs sea suficiente
  const displayBlogs = sortedBlogs.slice(0, Math.min(6, sortedBlogs.length)); // Mostrar hasta 6 blogs si existen

  return (
    <section className="w-full  mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex  justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-accent dark:text-accentDark underline underline-offset-2      text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
        {displayBlogs.map((blog, index) => (
          <div key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
