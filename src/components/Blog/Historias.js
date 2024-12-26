import { sortBlogs } from '@/src/utils'
import React from 'react'
import BlogLayoutBeta from '../Blog/BlogLayoutBeta'
import BlogLayoutOne from '../Blog/BlogLayoutOne'
import Link from 'next/link'

const FeaturedPosts = ({ blogs }) => {
	const sortedBlogs = sortBlogs(blogs);
	return (
		<div className='container mx-auto flex flex-col px-4 py-4 pt-0 md:py-10 md:pt-0 md:px-0 overflow-x-hidden'>
			<h2 className='text-3xl text-black dark:text-amarillo font-semibold mb-3'>historias</h2>
			<div className='flex gap-5 overflow-auto pb-3'>
				<BlogLayoutOne blog={sortedBlogs[0]} />
				<BlogLayoutOne blog={sortedBlogs[1]} />
				<BlogLayoutOne blog={sortedBlogs[2]} />
				<BlogLayoutOne blog={sortedBlogs[3]} />
			</div>
			<Link href={`/categories/all`} className='text-lg text-black dark:text-amarillo font-semibold mb-3 text-center py-1 pb-[7px] border border-black dark:border-white mt-3 rounded-lg'>ver todas</Link>
		</div>
	)
}

export default FeaturedPosts