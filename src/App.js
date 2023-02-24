// import { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { SharedLayout } from "./pages/Navbar/SharedLayout.jsx";
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";
import { About } from "./pages/About/About.jsx";
import { Project } from "./pages/Projects/Project.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import "./index.scss";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />} />
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
