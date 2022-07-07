import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogsPage from "./Pages/Blogs";
import React from "react";
import "./App.css";

const urlEndpoint = "http://localhost:4000";

const App = () => {
  const [serverJSON, setServerJSON] = useState({ message: [] });

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
      const url = `${urlEndpoint}/blogs/all-blogs`;
      const apiResponse = await fetch(url);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };
    fetchData();
  }, []);

  // console.log(serverJSON);

  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route
            path="/blogs"
            element={<BlogsPage blogs={serverJSON.message} />}
          />
        </Routes>
      </header>
    </div>
  );
};

export default App;
