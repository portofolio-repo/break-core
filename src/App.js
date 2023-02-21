// import { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";
import { About } from "./pages/About/About.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
