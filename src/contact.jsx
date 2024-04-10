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
    title: "Google",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque laboriosam quam, ipsa quo, eos assumenda delectus, autem qui dicta corporis iusto officiis porro dolores eius quaerat praesentium officia nihil?`,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    authorName: "Ram Subedi",
    publishedDate: "2017 08 08",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyFlEvMckm51TYvRVdZtCdMXa7mM12f313aM5z4B6Cw&s",
  },
  {
    id: 3,
    title: "Google",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque laboriosam quam, ipsa quo, eos assumenda delectus, autem qui dicta corporis iusto officiis porro dolores eius quaerat praesentium officia nihil?`,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    authorName: "Ram Subedi",
    publishedDate: "2017 08 08",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyFlEvMckm51TYvRVdZtCdMXa7mM12f313aM5z4B6Cw&s",
  },
  {
    id: 4,
    title: "Google",
    excerpt: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis atque laboriosam quam, ipsa quo, eos assumenda delectus, autem qui dicta corporis iusto officiis porro dolores eius quaerat praesentium officia nihil?`,
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"],
    authorName: "Ram Subedi",
    publishedDate: "2017 08 08",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyFlEvMckm51TYvRVdZtCdMXa7mM12f313aM5z4B6Cw&s",
  },
];

export default function Contact() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {blogs.map((blog) => {
        return <BlogCard />;
      })}
    </div>
  );
}

const BlogCard = (props) => {
  return (
    <div>
      <div>
        {props.title}
        {props.description}
        {props.tags}
        {props.publishedDate}
        {props.authorName}
      </div>
      <img src={props.imageUrl} alt={props.title} />
    </div>
  );
};
