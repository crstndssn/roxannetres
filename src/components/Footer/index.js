'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { InstagramIcon, LinkedinIcon, TwitterIcon } from '../Icons';
import Link from 'next/link';

const Footer = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);
	return (
		<footer className='border-t-2 border-black dark:border-white bg-[rgb(255 252 213)] dark:bg-black flex flex-col items-center text-black dark:text-light'>

			<div className='container mx-auto w-full flex justify-between py-3'>
				<div className='flex justify-center items-center'>
					hecho con &hearts; por <a href='#' className='underline ml-1'>cristian dussán</a>
				</div>
				<span className='rounded-full border border-white py-1 px-2'>v0.20</span>
			</div>
		</footer>
	)
}

export default Footer