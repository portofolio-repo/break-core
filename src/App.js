// import { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { SharedLayout } from "./pages/Navbar/SharedLayout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { About } from "./pages/About/About";
import { Project } from "./pages/Projects/Project";
import { Contact } from "./pages/Contact/Contact";
import "./index.scss";

function App() {
  return (
    <div>
      <Router>
        <SharedLayout />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
