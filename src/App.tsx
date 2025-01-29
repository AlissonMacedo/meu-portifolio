import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./Layout";
import HomePage from "./Pages/Home/Home";
import AboutPage from "./Pages/About/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
