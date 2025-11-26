import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Surprise from "./pages/Surprise";
import Galaxy from "./pages/Galaxy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/surprise" element={<Surprise />} />
      <Route path="/galaxy" element={<Galaxy />} />
    </Routes>
  );
}
