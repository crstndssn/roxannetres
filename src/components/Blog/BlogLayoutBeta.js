import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import Tags from '../Elements/Tag'

import { format } from 'date-fns';


const BlogLayoutTwo = ({blog}) => {
	return (
		<div className='flex flex-col'>
			<Link href={blog.url} className='col-span-4 h-full max-h-[180px] rounded-lg overflow-hidden'>
				<Image src={blog.image.replace("../../../public", "")}
					alt={blog.title}
					width={1000}
					height={1000}
					className="aspect-square w-full h-full object-cover object-center" />
			</Link>

			<div className='col-span-8 w-full'>
				<Link href={blog.url} className='inline-block my-1'>
					<h2 className='font-semibold capitalize text-lg'>
						<span className='text-white bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500'>
							{blog.title}
						</span>
					</h2>
				</Link>
				<span className='capitalize text-white/50 font-semibold text-base'>
					{format(new Date(blog.publishedAt), "MMMM dd, yyyy")}
				</span>
			</div>
		</div>
	)
}

export default BlogLayoutTwo