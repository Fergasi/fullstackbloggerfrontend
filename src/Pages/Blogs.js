import React from "react";

const BlogsPage = ({
  blogs,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  filterField,
  setFilterField,
  filterValue,
  setFilterValue,
  limit,
  setLimit,
  page,
  setPage,
}) => {
  return (
    <div className="blogs-page">
      <h1>Blogs Page</h1>
      <div className="Inputs">
        <div>
          <label>Sort By: </label>
          <select
            value={sortField}
            onChange={(e) => {
              const newSortField = e.target.value;
              setSortField(newSortField);
            }}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="createdAt">Created At</option>
            <option value="id">ID</option>
          </select>
          <br />
          <label>Sort Order: </label>
          <select
            value={sortOrder}
            onChange={(e) => {
              const newSortOrder = e.target.value;
              setSortOrder(newSortOrder);
            }}
          >
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
        </div>
        <div>
          <label>Filter Field: </label>
          <select
            value={filterField}
            onChange={(e) => {
              const newFilterField = e.target.value;
              setFilterField(newFilterField);
            }}
          >
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
          <br />
          <label>Filter Value: </label>
          <input
            placeholder="..."
            type="text"
            value={filterValue}
            onChange={(e) => {
              const newFilterValue = e.target.value;
              setFilterValue(newFilterValue);
            }}
          ></input>
        </div>
        <div>
          <label>Limit: </label>
          <input
            min="1"
            placeholder="Results per Page"
            type="number"
            value={limit}
            onChange={(e) => {
              const newLimit = e.target.value;
              setLimit(newLimit);
            }}
          ></input>
          <br />
          <label>Page: </label>
          <input
            min="1"
            placeholder="Page Number"
            type="number"
            value={page}
            onChange={(e) => {
              const newPage = e.target.value;
              setPage(newPage);
            }}
          ></input>
        </div>
      </div>
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
          <strong> Created At: </strong> &nbsp; {blog.createdAt}
        </span>
      </p>
      <p>
        <span>
          <strong> Last Modified: </strong> &nbsp; {blog.lastModified}
        </span>
      </p>
      <p>
        <span>
          <strong> ID: </strong> &nbsp; {blog.id}
        </span>
      </p>
      <br />
    </div>
  );
};

export default BlogsPage;
