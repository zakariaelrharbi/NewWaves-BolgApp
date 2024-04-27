import React from 'react'
import ArticleCards from '../../Components/ArticleCards'
import { FaArrowRight } from "react-icons/fa";

const Articles = () => {
  return (
    <section>
      <div>
     
      <ArticleCards className="w-full "/>
      <ArticleCards className="w-full "/>
      </div>
      <button className="mx-auto flex items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 mb-4 rounded-full">
        <span>More Articles</span>
        <FaArrowRight className="w-3 h-3"/>
      </button>
    </section>
  )
}

export default Articles
