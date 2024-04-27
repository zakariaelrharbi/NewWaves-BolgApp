import React from 'react'
import { Link } from 'react-router-dom'

const SuggestedPosts = ({className, header, posts = [], tags}) => {
  return (
    <div className={`w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg p-4 ${className}`}>
      <h2 className="font-robot font-medium text-dark-hard md:text-xl flex justify-center">{header}</h2>
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5">
        {posts.map((item) =>(
          <div key={item._id} className="flex space-x-3 flex-nowrap items-center">
            <img src={item.image} alt="house" className="aspect-square object-cover rounded-lg w-1/5 hover:scale-105 cursor-pointer" />
          <div className="text-sm font-roboto text-dark-hard font-medium">
            <a className="hover:underline cursor-pointer"><h3 className="text-sm font-roboto font-medium text-dark-hard md:text-base lg:text-lg">{item.title}</h3></a>
            <span className="text-xs opacity-60">
              {new Date(item.createdAt).toLocaleDateString("en-Us", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          </div>
        ))}
      </div>
      <h2 className="font-roboto font-medium text-dark-hard mt-8 md:text-xl">Tags</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item, index)=>(
          <Link key={index} to="/" className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto texs-xs text-white md:text-sm">{item}</Link>
        ))}
      </div>
    </div>
  )
}

export default SuggestedPosts
