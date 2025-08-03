import { Route, Routes } from "react-router";
import ArticleWriter from "./pages/ArticleWriter";
import BackgroundRemoval from "./pages/BackgroundRemoval";
import BlogTitleGenerator from "./pages/BlogTitleGenerator";
import Community from "./pages/Community";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ImageGeneration from "./pages/ImageGeneration";
import Layout from "./pages/Layout";
import ObjectRemoval from "./pages/ObjectRemoval";
import ResumeReviewer from "./pages/ResumeReviewer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<ArticleWriter />} />
          <Route path="remove-background" element={<BackgroundRemoval />} />
          <Route path="blog-titles" element={<BlogTitleGenerator />} />
          <Route path="generate-images" element={<ImageGeneration />} />
          <Route path="remove-object" element={<ObjectRemoval />} />
          <Route path="review-resume" element={<ResumeReviewer />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
