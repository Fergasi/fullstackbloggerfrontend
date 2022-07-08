import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogsPage from "./Pages/Blogs";
import React from "react";
import "./App.css";
import PostBlogPage from "./Pages/PostBlogPage";

const urlEndpoint = "http://localhost:4000";

const App = () => {
  const [serverJSON, setServerJSON] = useState({ message: [] });
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("DESC");
  const [filterField, setFilterField] = useState("title");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(Number(10));
  const [page, setPage] = useState(Number(1));

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
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const apiResponse = await fetch(`${urlEndpoint}/blogs/hello-blogs`);
  //     const apiJSON = await apiResponse.json();
  //     setServerJSON(apiJSON);
  //     return;
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page]);

  // console.log(serverJSON);

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
            element={<PostBlogPage blogSubmit={blogSubmit} />}
          />
        </Routes>
      </header>
    </div>
  );
};

export default App;
