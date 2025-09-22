"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

// Example static data array
const newsData = [
  {
    id: 1,
    name: "Breakthrough in Quantum Computing: Computing Power Reaches Milestone",
    slug: "breakthrough-in-quantum-computing-computing-power-reaches-milestone",
    description:
      "Researchers achieve a significant milestone in quantum computing, unlocking unprecedented computing power that has the potential to revolutionize various industries.",
    content: `
[youtube-video]https://www.youtube.com/watch?v=SlPhMPnQ58k[/youtube-video]
image
Some content here...
image
More content...`,
    image: "https://ckosmic.whdev.in/storage/news/1.jpg",
    categories: [
      { id: 4, name: "5G and Connectivity", url: "#" },
      { id: 2, name: "Cybersecurity", url: "#" },
    ],
    tags: [
      { id: 3, name: "Neural Networks" },
      { id: 4, name: "Data Security" },
      { id: 7, name: "IoT" },
    ],
  },
  {
    id: 2,
    name: "Another News Title Example",
    slug: "another-news-title-example",
    description: "This is another news description example.",
    content: "Content of the second news...",
    image: "https://via.placeholder.com/800x450",
    categories: [{ id: 5, name: "AI", url: "#" }],
    tags: [{ id: 6, name: "Machine Learning" }],
  },
];

export default function NewsPage({}) {
  const params = useParams();
  const { id } = params;

  // Find the news item by slug
  const news = newsData.find((item) => item.slug === id);

  if (!news) return <div className="text-center py-20">News not found</div>;

  return (
    <div className="bg-white py-14">
      <div className="hero-main-container mx-auto ">
        <h1 className="text-3xl font-bold mb-4">{news.name}</h1>
        <p className="text-gray-700 mb-4">{news.description}</p>
        {news.image && (
          <div className="my-4">
            <Image
              src={news.image}
              alt={news.name}
              width={800}
              height={250}
              className="rounded-md"
            />
          </div>
        )}

        <div className="prose max-w-none">{news.content}</div>
        {/* Categories */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Categories:</h3>
          <div className="flex gap-2 flex-wrap">
            {news.categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.url}
                className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Tags:</h3>
          <div className="flex gap-2 flex-wrap">
            {news.tags.map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
