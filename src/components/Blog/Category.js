import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-1 md:py-2 px-4 md:px-10   rounded-full border border-solid border-dark dark:border-light hover:scale-105 transition-all ease duration-200 m-1",
        props.className,
        active ? "bg-dark text-light dark:bg-light dark:text-dark" : "bg-light text-dark dark:bg-dark dark:text-light"
      )}
    >
      {name}
    </Link>
  );
};

export default Category;