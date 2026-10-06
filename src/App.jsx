import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, NavBar } from "./components";
import {
  About,
  Contact,
  Destinations,
  Home,
  NotFound,
  SingleDestination,
} from "./pages";

const App = () => {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    fetch("/travel.json")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="container mx-auto px-4 py-8 mb-auto">
        {destinations ? (
          <Routes>
            <Route path="/" element={<Home destinations={destinations} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/destinations"
              element={<Destinations destinations={destinations} />}
            />
            <Route
              path="/destinations/:slug"
              element={<SingleDestination destinations={destinations} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        ) : (
          <span className="loading loading-dots loading-xl"></span>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
