import React from "react";

const BlogsPage = ({ blogs }) => {
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
      <div>
        {blogs.map((blog) => {
          return <BlogPost blog={blog} key={blog.id} />;
        })}
      </div>
    </div>
  );
};

const BlogPost = ({ blog }) => {
  return (
    <div className="blogPost">
      <br />
      <span>
        <strong> Title: </strong> &nbsp;
        {blog.title}
      </span>
      <p>
        <span>
          <strong> Author: </strong> &nbsp;
          {blog.author}
        </span>
      </p>
      <p>
        <span>
          <strong>Category: </strong> &nbsp;
          {blog.category}
        </span>
      </p>
      <p>{blog.text}</p>
      <p>
        <span>
          <strong> Created At: </strong> <br />
        </span>
        {blog.createdAt}
      </p>
      <p>
        <span>
          <strong> Last Modified: </strong> <br />
        </span>
        {blog.lastModified}
      </p>
      <p>
        <span>
          <strong> ID: </strong> &nbsp; {blog.id}
        </span>
      </p>
      <br />
      <hr></hr>
    </div>
  );
};

export default BlogsPage;
