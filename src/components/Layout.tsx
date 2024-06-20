import { Route, Routes } from "react-router-dom";
import LineTabs from "./Links";
import Article from "./Article";
import Home from "@/pages/Home";
import Business from "@/pages/Business";
import World from "@/pages/World";
import Technology from "@/pages/Technology";
import Science from "@/pages/Science";
import Sports from "@/pages/Sports";
import Health from "@/pages/Health";
import Entertainment from "@/pages/Entertainment";

const Layout = () => {
  return (
    <div>
      <LineTabs center />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world" element={<World />} />
        <Route path="/business" element={<Business />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/science" element={<Science />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/health" element={<Health />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/:id" element={<Article />} />
        <Route path="/world/:id" element={<Article />} />
        <Route path="/business/:id" element={<Article />} />
        <Route path="/technology/:id" element={<Article />} />
        <Route path="/science/:id" element={<Article />} />
        <Route path="/sports/:id" element={<Article />} />
        <Route path="/health/:id" element={<Article />} />
        <Route path="/entertainment/:id" element={<Article />} />
      </Routes>
    </div>
  );
};
export default Layout;
