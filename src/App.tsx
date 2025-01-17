import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import NewPost from "./components/NewPost";
import PostDetail from "./components/PostDetail";
import PostRedact from "./components/PostRedact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/:id/redact" element={<PostRedact />} />
      </Routes>
    </BrowserRouter>
  );
}