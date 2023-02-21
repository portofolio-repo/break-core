import { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Dashboard } from "./pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
