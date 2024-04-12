import React from "react";

const blogs = [
  {
    id: 1,
    title: "Google",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque laboriosam quam, ipsa quo, eos assumenda delectus, autem qui dicta corporis iusto officiis porro dolores eius quaerat praesentium officia nihil?`,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    authorName: "Ram Subedi",
    publishedDate: "2017 08 08",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyFlEvMckm51TYvRVdZtCdMXa7mM12f313aM5z4B6Cw&s",
  },
  {
    id: 2,
    title: "Instagram",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque laboriosam quam, ipsa quo, eos assumenda delectus, autem qui dicta corporis iusto officiis porro dolores eius quaerat praesentium officia nihil?`,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    authorName: "Ram Subedi",
    publishedDate: "2017 08 08",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyFlEvMckm51TYvRVdZtCdMXa7mM12f313aM5z4B6Cw&s",
  },
  {
    id: 3,
    title: "Twitter",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque laboriosam quam, ipsa quo, eos assumenda delectus, autem qui dicta corporis iusto officiis porro dolores eius quaerat praesentium officia nihil?`,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    authorName: "Ram Subedi",
    publishedDate: "2017 08 08",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyFlEvMckm51TYvRVdZtCdMXa7mM12f313aM5z4B6Cw&s",
  },
  {
    id: 4,
    title: "Facebook",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque laboriosam quam, ipsa quo, eos assumenda delectus, autem qui dicta corporis iusto officiis porro dolores eius quaerat praesentium officia nihil?`,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    authorName: "Ram Subedi",
    publishedDate: "2017 08 08",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyFlEvMckm51TYvRVdZtCdMXa7mM12f313aM5z4B6Cw&s",
  },
];

export default function Contact() {
  console.log(blogs);
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {blogs.map((blog) => {
        return (
          <div>
            <BlogCard
              id={blog.id}
              title={blog.title}
              description={blog.excerpt}
              tags={blog.tags}
              publishedDate={blog.publishedDate}
              authorName={blog.authorName}
              imageUrl={blog.imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
}

const BlogCard = ({
  id,
  title,
  description,
  tags,
  publishedDate,
  authorName,
  imageUrl,
}) => {
  return (
    <div key={id}>
      <div>
        <h2 className="text-blue-600 text-3xl">{title}</h2>
        <p>{description}</p>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        <p>{publishedDate}</p>
        <p>{authorName}</p>
      </div>
      <img src={imageUrl} alt={title} />
    </div>
  );
};
