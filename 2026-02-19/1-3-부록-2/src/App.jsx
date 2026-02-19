import MainLayout from "./components/layout/MainLayout";
import { Routes, Route } from "react-router-dom";

import PostDetail from "./components/pages/PostDetail";
import PostList from "./components/pages/PostList";
import Home from "./components/pages/Home";
import { useState } from "react";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "React는 재밌다", content: "정말 재미있는 라이브러리입니다." },
    { id: 2, title: "SPA의 장점", content: "깜빡임이 없어서 좋아요." },
    { id: 3, title: "Router 정복", content: "이제 페이지 이동은 식은 죽 먹기!" },
  ]);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList posts={posts} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} />} />
      </Route>
    </Routes>
  );
}
