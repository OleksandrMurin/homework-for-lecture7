import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./layouts/AboutPage";
import Counter from "./layouts/CounterPage";
import HeroPage from "./layouts/HeroPage";
import HomePage from "./layouts/HomePage";
import Layout from "./layouts/Layout";

import { ThemeModeProvider } from "./providers/ThemeModeProvider";

export default function App() {
  return (
    <ThemeModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="counter" element={<Counter />} />
            <Route path="hero" element={<HeroPage />} />
            <Route path="hero/:id" element={<HeroPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeModeProvider>
  );
}
