'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {

  const handleDownloadCV = () => {
    // Construct the URL to your CV file
    const cvUrl = '/Naman_chandra_resume-t1.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 'Naman_chandra_resume.pdf');
    
    // Append the link to the body and trigger the download
    document.body.appendChild(link);
    link.click();
    
    // Clean up by removing the link from the body
    document.body.removeChild(link);
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{' '} Naman
            </span>
            <br></br>
          </h1>
          <h2 className="text-white mb-4 md:text-large sm:text-md lg:text-xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              I'm into &nbsp;
            </span>
            <TypeAnimation
              sequence={[
                'FrontEnd Development',
                1000,
                'Backend Development',
                1000,
                'FullStack Development',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <>
          
          </>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I focus on developing user-friendly web applications that meet the client's
            requirements, with attention to detail, scalability, and performance.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <button
             
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              onClick={handleDownloadCV}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-r from-primary-400 to-secondary-600 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={385}
              height={385}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
