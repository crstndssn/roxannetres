import Image from 'next/image'

import {allBlogs} from "contentlayer/generated"

import HomeCoverSection from "@/src/components/Home/HomeCoverSection"
import FeaturedPosts from "@/src/components/Home/FeaturedPosts"
import RecentPosts from '../components/Home/RecentPosts'
import Categories from '../components/Home/Categories'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
     	<HomeCoverSection blogs={allBlogs}/>
			<Categories />
     	<FeaturedPosts blogs={allBlogs}/>
		 	<RecentPosts blogs={allBlogs} />
    </main>
  )
}
