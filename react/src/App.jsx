import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";

const Resources = lazy(() => import('./pages/Resources/Resources.jsx'));
const ResourceDetail = lazy(() => import('./pages/ResourceDetail/ResourceDetail.jsx'));

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main className="lg:pb-14 md:pb-4 sm:pb-2 xs:pb-1 pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources/:type" element={<Resources />} />
          <Route path="/resource/:id" element={<ResourceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
