import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Tags from '../Elements/Tag'
import { slug } from 'github-slugger';

const BlogLayoutOne = ({ blog }) => {
	return (
		<div className='w-full min-w-[280px] inline-block roun'>
			<div className='flex flex-col items-start justify-end relative h-[330px] md:h-[50vh]'>
				<div className='absolute top-0 left-0 bottom-0 right-0 h-full z-0' />
				<Image src={blog.image.replace("../../../public", "")}
					alt={blog.title}
					fill
					className="w-full h-full object-center object-cover -z-10 rounded-lg" />

				<div className='w-3/4 px-3 py-3 md:px-4 md:py-4 md:p-16 flex flex-col items-start justify-center z-0 text-light'>
					<Tags link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
					<Link href={blog.url} className='mt-2 bg-amarillo border border-black rounded-full px-4 py-2 hover:scale-105 transition-all ease duration-200'>
						<h1 className='font-semibold text-lg md:text-xl text-black leading-4'>
							{blog.title}
						</h1>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlogLayoutOne