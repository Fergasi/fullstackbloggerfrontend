import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogsPage from "./Pages/Blogs";
import React from "react";
import "./App.css";
import PostBlogPage from "./Pages/PostBlogPage";
import BlogManager from "./Pages/BlogManager";

const urlEndpoint = "http://localhost:4000";

const App = () => {
  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [filterField, setFilterField] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(Number(10));
  const [page, setPage] = useState(Number(1));
  const [isFetching, setIsFetching] = useState(false);
  const [adminBlogList, setAdminBlogList] = useState({ message: [] });
  const [adminBlogsLoading, setAdminBlogsLoading] = useState(false);

  //function for sending POST request for submitting blogs
  const blogSubmit = async (blog) => {
    const url = `${urlEndpoint}/blogs/blog-submit`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const responseJSON = await response.json();
    return responseJSON;
  };

  //function for sending the blog DELETE request
  const deleteBlog = async (blogId) => {
    setAdminBlogsLoading(true);
    const url = `${urlEndpoint}/admin/delete-blog/${blogId}`;
    const response = await fetch(url, {
      method: "DELETE",
    });
    const responseJSON = await response.json();
    setAdminBlogsLoading(false);
    console.log(responseJSON);
  };

  //useEffect for fetching the full blog list from blogs/all-blogs
  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page, isFetching]);

  //useEffect for fetching the admin blog list from "admin/blog-list"
  useEffect(() => {
    const fetchAdminBlogList = async () => {
      const url = `${urlEndpoint}/admin/blog-list`;
      const apiResponse = await fetch(url);
      const json = await apiResponse.json();
      setAdminBlogList(json);
      // console.log("adminBL:" + json);
      return json;
    };
    fetchAdminBlogList();
  }, [adminBlogsLoading]);

  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route
            index
            element={
              <BlogsPage
                blogs={serverJSON.message}
                sortField={sortField}
                setSortField={setSortField}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                filterField={filterField}
                setFilterField={setFilterField}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
              />
            }
          />
          <Route
            path="/post-blog"
            element={
              <PostBlogPage
                blogSubmit={blogSubmit}
                setIsFetching={setIsFetching}
              />
            }
          />
          <Route
            path="/blog-manager"
            element={
              <BlogManager
                adminBlogList={adminBlogList.message}
                deleteBlog={deleteBlog}
              />
            }
          />
        </Routes>
      </header>
    </div>
  );
};

export default App;
