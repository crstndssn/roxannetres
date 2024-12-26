"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {

    const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='MDXContent container mx-auto text-black dark:text-amarillo text-lg pb-10
		first-letter:uppercase
		first-letter:font-semibold
    '> 
        <MDXContent components={mdxComponents}/>
    </div>
  )
}

export default RenderMdx