import React from "react";
import BlogManagerCard from "../components/BlogManagerCard";

const BlogManager = ({ adminBlogList, deleteBlog }) => {
  return (
    <div className="postBlogs">
      <h1>Admin Blog List</h1>
      {adminBlogList.map((blog) => {
        return (
          <BlogManagerCard blog={blog} deleteBlog={deleteBlog} key={blog.id} />
        );
      })}
    </div>
  );
};

export default BlogManager;
