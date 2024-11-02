import Link from 'next/link'
import Image from 'next/image'
import logodark from "@/public/logodark.png"
import logolight from "@/public/logolight.png"

const Logo = () => {
	return (
		<Link href="/">
			<div className="w-7 md:w-10">
				<Image src={logodark} alt="Codebucks" className="hidden dark:block w-full h-auto" />
				<Image src={logolight} alt="Codebucks" className="block dark:hidden w-full h-auto" />
			</div>
		</Link>
	)
}

export default Logo