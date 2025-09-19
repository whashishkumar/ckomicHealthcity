// components/ArticleCard.js
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ id, title, summary, image, date }) {
  return (
    <>
      <article className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="relative w-full h-48">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 primary-font">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mt-2 flex-1 line-clamp-3 secondary-font">
            {summary}
          </p>
          <div className="flex flex-col mt-4 gap-5 secondary-font">
            <span className="text-xs text-gray-500">{date}</span>
            <div>
              <Link
                href={`/blogs/${id}`}
                className="px-4 py-2  rounded-lg read-more-btn primary-font"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
