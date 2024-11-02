import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react"

const Tags = ({ link = "#", name, ...props }) => {
	return (
		<Link href={link} className={cx("inline-block text-sm py-1 px-3 md:py-2 md:px-4 bg-dark text-light rounded-full font-semibold hover:scale-105 transition-all ease duration-200", props.className)}>
			{name}
		</Link>
	)
}

export default Tags