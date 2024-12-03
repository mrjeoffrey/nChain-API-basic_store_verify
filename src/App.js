import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import SubmitPage from "./pages/SubmitPage";
import ViewPage from "./pages/ViewPage";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center gap-4 my-4">
      <Link
        to="/submit"
        className={`rounded-3xl px-5 py-2 border transition-all ${
          location.pathname === "/submit"
            ? "bg-blue-500 text-white border-blue-700"
            : "bg-blue-300 text-blue-800 border-blue-600 hover:px-10"
        }`}
      >
        Submit
      </Link>
      <Link
        to="/view"
        className={`rounded-3xl px-5 py-2 border transition-all ${
          location.pathname === "/view"
            ? "bg-green-500 text-white border-green-700"
            : "bg-green-300 text-green-800 border-green-600 hover:px-10"
        }`}
      >
        View
      </Link>
    </div>
  );
};
const App = () => {
  // const location = useLocation();
  return (
    <div className="min-h-screen p-4 bg-gray-300">
      <h1 className="text-6xl font-bold text-center">
        nChain API Write & Read Encoded the TX{" "}
      </h1>
      <Router>
        <div className="flex justify-center gap-4 my-4">
          <NavBar />
        </div>
        <Routes>
          {/* Redirect root `/` to `/submit` */}
          <Route path="/" element={<Navigate to="/submit" />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
