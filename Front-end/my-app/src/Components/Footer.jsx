import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";




const Footer = () => {
  return (
    <section>
      <>
  {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
  <footer className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div className="flex justify-center text-teal-600 sm:justify-start">
          <a href="/" className="w-16 flex justify-center lg:flex lg:justify-start dark:text-[#007bff] font-bold text-3xl">New <span>W</span>aves</a>
          </div>
          <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
            Explore our blog for diverse topics, including tech, lifestyle,travel, 
            and wellness. Our team curates insightful articles to inspire and inform.
          </p>
          <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-gray-500 transition hover:text-[#007bff]"> <span className="sr-only">Facebook</span>
              <FaFacebook className="h-5 w-5"/>
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-gray-500 transition hover:text-[#007bff]">
                <span className="sr-only">Instagram</span>
               <FaInstagram className="h-5 w-5"/>
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-gray-500 transition hover:text-[#007bff]">
                <span className="sr-only">XTwitter</span>
               <FaXTwitter className="h-5 w-5"/>
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-gray-500 transition hover:text-[#007bff]">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-5 w-5"/>
              </a>
            </li>
            <li>
              <a href="#" rel="noreferrer" target="_blank" className="text-gray-500 transition hover:text-[#007bff]">
                <span className="sr-only">Dribbble</span>
              <FaDribbble className="h-5 w-5"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">About Us</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Company History</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Meet the Team</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Employee Handbook</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">{" "}Careers{" "}</a>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Our Services</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Web Development</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">{" "}Web Design{" "}</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">{" "}Marketing{" "}</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">{" "}Google Ads{" "}</a>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Helpful Links</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">{" "}FAQs{" "}</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">{" "}Support{" "}</a>
              </li>
              <li>
                <a className="text-gray-700 transition hover:text-gray-700/75" href="#">Live Chat</a>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-gray-900">Contact Us</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="#">
                  <span className="flex-1 text-gray-700">john@doe.com</span>
                </a>
              </li>
              <li>
                <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="#">
                  <span className="flex-1 text-gray-700">0123456789</span>
                </a>
              </li>
              <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                <address className="-mt-0.5 flex-1 not-italic text-gray-700">213 Lane, London, United Kingdom</address>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-100 pt-6">
        <div className="text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-sm text-gray-500">
            <span className="block sm:inline">All rights reserved.</span>
            <a className="inline-block text-gray-500 underline transition hover:text-[#007bff]" href="#">Terms &amp; Conditions</a><span>·</span>
            <a className="inline-block text-gray-500 underline transition hover:text-[#007bff]" href="#"> Privacy Policy</a>
          </p>
          <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
            © {new Date().getFullYear()} New Waves
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

    </section>
  )
}

export default Footer
