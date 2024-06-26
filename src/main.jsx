import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./design/signup.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NoPage from "./pages/NoPage.jsx";
import Home from "./pages/Home.jsx";
import Video from "./pages/Video.jsx";
import Recipe from "./pages/Recipe.jsx";
import FetchA from "./pages/ArticleFetch.jsx";
import FetchV from "./pages/VideoFetch.jsx";

import Admin from "./pages/AdminProfile.jsx";
import User from "./pages/UserProfile.jsx";

import CreateArticle from "./pages/CreateArticle.jsx";
import CreateVideo from "./pages/CreateVideo.jsx";

import { Signup } from "./components/Signup.jsx";
import { Login } from "./components/Login.jsx";


import InfoUpdate from "./pages/InfoUpdate.jsx";
import ForgetPass from "./pages/ForgetPass.jsx";

function App() {
  const handleStep1Submit = (values) => {
    // Handle step 1 form submission logic here
    console.log("Step 1 form values:", values);
  };

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/sign-up" element={<Signup onSubmit={handleStep1Submit} />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/blogs" element={<FetchA />} />
          <Route path="/video" element={<FetchV />} />

          <Route path="/create-article" element={<CreateArticle />} />
          <Route path="/create-video" element={<CreateVideo />} />

          <Route path="/admin-profile" element={<Admin />} />
          <Route path="/user-profile" element={<User />} />

          <Route path="/info-update" element={<InfoUpdate />} />
          <Route path="/reset-password" element={<ForgetPass />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
