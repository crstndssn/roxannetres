"use client"
import Link from "next/link";
import Logo from "./Logo";
import { InstagramIcon, LinkedinIcon, MoonIcon, SunIcon, TwitterIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {

	const [mode, setMode] = useThemeSwitch();
	const [click, setClick] = useState(false);

	const toggle = () => {
		setClick(!click)
	}
	return (
		<header className="container mx-auto w-full px-4 py-6 md:py-7 md:px-0 sm:px-10 flex items-center justify-between">
			<Logo />

			<button className="inline-block sm:hidden z-50 mt-1 fixed right-3" onClick={toggle} aria-label="Hamburger Menu">
				<div className="w-8 cursor-pointer transition-all ease duration-300 mr-4 mb-1">
					<div className="relative">
						<span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded-full transition-all ease duration-200"
							style={{
								transform: click ? "rotate(-45deg) translateY(0)" : "rotate(0deg) translateY(8px)"
							}}

						>&nbsp;</span>
						<span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded-full transition-all ease duration-200"
							style={{
								opacity: click ? 0 : 1
							}}
						>&nbsp;</span>
						<span className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded-full transition-all ease duration-200"
							style={{
								transform: click ? "rotate(45deg) translateY(0)" : "rotate(0deg) translateY(-8px)"
							}}
						>&nbsp;</span>
					</div>
				</div>
			</button>

			<nav className=" w-max py-2 px-4 sm:px-8 border border-solid border-black dark:border-amarillo rounded-full font-medium  items-center flex  sm:hidden fixed top-[1.4rem] right-1/2 translate-x-1/2 bg-gold dark:bg-black z-50 transition-all ease duration-300 text-sm"
				style={{
					top: click ? "1.4rem" : "-5rem"
				}}

			>
				<Link href="/" className="mr-2 text-black dark:text-amarillo">inicio</Link>
				<Link href="/imagenes" className="mx-2 text-black dark:text-amarillo">imágenes</Link>
				<Link href="/categories/all" className="mx-2 text-black dark:text-amarillo">historias</Link>
				<button onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={cx("w-5 h-5 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
						"bg-light text-dark")}
					aria-label="theme-switcher"
				>
					{
						mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />
					}
				</button>
			</nav>

			<nav className=" w-max py-3 px-8  border border-black dark:border-amarillo rounded-full font-medium  items-center hidden sm:flex
       bg-[#fff4e0] dark:bg-black backdrop-blur-sm z-50">
				<Link href="/" className="mr-2 text-black dark:text-amarillo">inicio</Link>
				<Link href="/imagenes" className="mx-2 text-black dark:text-amarillo">imágenes</Link>
				<Link href="/categories/all" className="mx-2 text-black dark:text-amarillo">historias</Link>
				<button onClick={() => setMode(mode === "light" ? "dark" : "light")}
					className={cx("w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1", mode === "light" ? "bg-dark text-light" :
						"bg-light text-dark")}
					aria-label="theme-switcher"
				>
					{
						mode === "light" ? <MoonIcon className={"fill-dark"} /> : <SunIcon className={"fill-dark"} />
					}
				</button>
			</nav>

		</header>
	)
}

export default Header;