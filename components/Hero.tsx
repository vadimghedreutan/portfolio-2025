"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaTwitter } from "react-icons/fa"

import hero_svg from "./hero_bg.svg"

const Hero = () => {
	return (
		<div className="relative sm:min-h-[65vh] min-h-[75vh] px-5 flex items-center justify-center">
			<div className="md:grid md:grid-cols-2 flex flex-col items-center space-y-8 sm:py-24">
				<h1 className="font-thunder_hc text-7xl md:text-8xl 3xs:text-5xl 3xs:pr-6 flex flex-col md:pl-10">
					System Administrator,{" "}
					<span className="bg-primary p-2 w-fit">Developer.</span>
				</h1>
				<div className="relative aspect-video w-full overflow-hidden hidden md:inline-flex">
					<Image
						src={hero_svg}
						alt=""
						fill
						sizes="100"
						priority
						className="object-cover"
					/>
				</div>
			</div>

			<div className="absolute top-0 sm:right-10 right-4">
				<div className="flex flex-col items-center space-y-4">
					<motion.a
						animate={{
							scale: [0, 1, 1.1, 1],
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
							stiffness: 50,
							delay: 0.3,
						}}
						href="https://github.com/vadimghedreutan"
						target="_blank"
					>
						<FaGithub
							className="h-8 w-8 sm:h-9 sm:w-9 cursor-pointer 
              transition-all duration-500 ease-out hover:scale-125"
						/>
					</motion.a>
					<motion.a
						animate={{
							scale: [0, 1, 1.1, 1],
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
							delay: 0.2,
							stiffness: 50,
						}}
						href="https://twitter.com/GhedreutanVadim"
						target="_blank"
					>
						<FaTwitter
							className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer
              transition-all duration-500 ease-out hover:scale-125"
						/>
					</motion.a>
				</div>
			</div>
		</div>
	)
}
export default Hero
