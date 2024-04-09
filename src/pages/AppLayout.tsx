import { Outlet } from "react-router-dom";

import Header from "../ui/Header";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />

      <div className="container mx-auto py-10 flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
