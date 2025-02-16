import Link from 'next/link'
import React from 'react'

const galeria = () => {
	return (
		<div className='container mx-auto flex flex-col px-4 py-4 md:py-10 md:px-0 min-h-[85vh]'>
			<Link href={'bejuco'} className='bg-[#3f5989] border-2 border-[#3f5989] min-h-[180px] rounded-xl p-7 flex justify-center items-center opacity-50'>
				<h2 className='kam-font m-0 text-[90px] leading-[90px] uppercase text-[#d3bf7c] font-bold'>bejuco</h2>
			</Link>
			<div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-4 mt-3'>
				<Link href={'alterocio'} className='bg-[#000000] text-[#ED0000] min-h-[180px] border-4 border-[#ED0000] rounded-xl p-7 flex justify-center items-center'>
					<h2 className='alter-font text-lg flex flex-col'>
						<span className='text-[40px] tracking-[-4px]'>alter</span>
						<span className='text-[55px] mt-[20px] tracking-[-4px]'>ocio</span> </h2>
				</Link>

				<Link href={'kam'} className='bg-[#F6F2E6] border-4 border-[#FECD27] min-h-[180px] rounded-xl p-7 flex justify-center items-center'>
					<h2 className='kam-font m-0 text-[90px] leading-[90px] uppercase text-[#FECD27] font-bold'>kam</h2>
				</Link>

				<Link href={'roxy'} className='bg-[#FFE6F9] border-4 border-[#ED0000] min-h-[180px] rounded-xl p-7 flex justify-center items-center'>
					<h2 className='roxy-font  m-0 mb-7 text-[90px] leading-[20px] uppercase text-[#ED0000]'>roxy</h2>
				</Link>

				<Link href={'siembra'} className='bg-[#F6F2E6] border-4 border-[#78b962] min-h-[180px] rounded-xl p-7 flex justify-center items-center'>
					<h2 className='kam-font m-0 text-[90px] leading-[90px] uppercase text-[#78b962] font-bold'>siembra</h2>
				</Link>
			</div>
		</div>
	)
}

export default galeria