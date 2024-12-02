import Link from 'next/link'
import React from 'react'

const galeria = () => {
	return (
<div className='container mx-auto flex flex-col px-4 py-4 md:py-10 md:px-0 min-h-[85vh]'>
			<div className='w-full  grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
				<div className='bg-[#ED0000] text-black min-h-[180px] border-2 border-black rounded-lg p-7 flex justify-center items-center opacity-50'>
					<h2 className='alter-font text-lg flex flex-col'>
						<span className='text-[40px] tracking-[-4px]'>alter</span>
						<span className='text-[55px] mt-[20px] tracking-[-4px]'>ocio</span> </h2>
				</div>

				<div className='bg-[#F6F2E6] border-2 border-[#FECD27] min-h-[180px] rounded-lg p-7 flex justify-center items-center opacity-50'>
					<h2 className='kam-font m-0 text-[90px] leading-[90px] uppercase text-[#FECD27] font-bold'>kam</h2>
				</div>

				<div className='bg-[#FFE6F9] border-2 border-[#ED0000] min-h-[180px] rounded-lg p-7 flex justify-center items-center opacity-50'>
					<h2 className='roxy-font  m-0 mb-7 text-[90px] leading-[20px] uppercase text-[#ED0000]'>roxy</h2>
				</div>

				<div className="border border-white rounded-full">
					<p className="text-white py-2 text-center">próximamente</p>
				</div>
			</div>
		</div>
	)
}

export default galeria