import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostBlogPage = ({ blogSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  return (
    <div className="postBlogs">
      <h1>Post Blog Page</h1>
      <label>Title</label>
      <input
        type="text"
        placeholder="Type blog title..."
        value={title}
        onChange={(e) => {
          const newTitle = e.target.value;
          setTitle(newTitle);
        }}
      />
      <br />
      <label>Category</label>
      <input
        type="text"
        placeholder="Type category..."
        value={category}
        onChange={(e) => {
          const newCategory = e.target.value;
          setCategory(newCategory);
        }}
      />
      <br />
      <label>Author</label>
      <input
        type="text"
        placeholder="Name"
        value={author}
        onChange={(e) => {
          const newAuthor = e.target.value;
          setAuthor(newAuthor);
        }}
      />
      <br />
      <textarea
        type="text"
        placeholder="Write your blog post text here..."
        value={text}
        onChange={(e) => {
          const newText = e.target.value;
          setText(newText);
        }}
      />
      <br />
      <button
        id="submit"
        type="submit"
        onClick={
          ("click",
          () => {
            blogSubmit({
              title: title,
              author: author,
              category: category,
              text: text,
            });
            navigate("/");
          })
        }
      >
        Submit
      </button>
    </div>
  );
};

export default PostBlogPage;
