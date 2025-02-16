import Image from 'next/image'

import { allBlogs } from "contentlayer/generated"

import HomeCoverSection from "@/src/components/Home/HomeCoverSection"
import FeaturedPosts from "@/src/components/Home/FeaturedPosts"
import RecentPosts from '../components/Home/RecentPosts'
import Imagenes from '../components/Home/Imagenes'
import Historias from '../components/Blog/Historias'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center">
			<HomeCoverSection blogs={allBlogs} />
			<Imagenes />
			<Historias blogs={allBlogs} />
			<Footer />
		</main>
	)
}
