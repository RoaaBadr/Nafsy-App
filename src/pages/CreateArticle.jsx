import React, { useState } from 'react';
import Navbar from "../sections/Navbar.jsx";
import { Link } from "react-router-dom";

export default function CreateArticle() {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageError, setImageError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.value);
    setImageError(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleError(false);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    setBodyError(false);
  };

  const handleCreate = () => {
    if (!image) {
      setImageError(true);
    }
    if (!title) {
      setTitleError(true);
    }
    if (!body) {
      setBodyError(true);
    }
    if (image && title && body) {
      // Call API to create article here
      console.log('Article created successfully!');
    }
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="create-article-container">
      <h1 className="create-article-title">Create Article Template </h1>
      <form className="create-article-form">
        <label className="create-article-label">
          Image (upload):
          <input type="file" value={image} onChange={handleImageChange} className="create-article-input" />
          {imageError && <div className="create-article-error">Required</div>}
        </label>
        <br />
        <label className="create-article-label">
          Article Title:
          <input type="text" value={title} onChange={handleTitleChange} className="create-article-input" />
          {titleError && <div className="create-article-error">Required</div>}
        </label>
        <br />
        <label className="create-article-label">
          Article Body:
          <textarea value={body} onChange={handleBodyChange} className="create-article-input" />
          {bodyError && <div className="create-article-error">Required</div>}
        </label>
        <br />
        </form>
        <div className="create-article-btn">
            <Link to={"/admin-profile"}><button className="create-btn-close" onClick={() => console.log('Modal closed')}>Close</button></Link>
        
        <button className="create-btn-create" onClick={handleCreate}>Create</button>
        </div>
    </div>
    </>
  );
}