import React from "react";

const BlogManagerCard = ({ blog, deleteBlog }) => {
  return (
    <div className="blogPost">
      <br />

      <span>
        <p>
          <strong> Title: </strong> &nbsp;
          {blog.title}
        </p>
      </span>

      <span>
        <p>
          <strong> Author: </strong> &nbsp;
          {blog.author}
        </p>
      </span>

      <p>
        <span>
          <strong>
            Created At: <br />
          </strong>
          &nbsp; {blog.createdAt}
        </span>
      </p>
      <p>
        <span>
          <strong>
            Last Modified: <br />
          </strong>
          &nbsp; {blog.lastModified}
        </span>
      </p>

      <span>
        <p>
          <strong> ID: </strong> &nbsp; {blog.id}
        </p>
      </span>

      <br />
      <button
        onClick={async () => {
          await deleteBlog(blog.id);
        }}
      >
        Delete
      </button>
      <br />
    </div>
  );
};

export default BlogManagerCard;
