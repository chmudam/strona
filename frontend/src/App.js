import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClubsListPage from "./pages/ClubsListPage";
import ClubDetailsPage from "./pages/ClubDetailsPage";
import SparingPartnersPage from "./pages/SparingPartnersPage";
import LoginPage from "./pages/LoginPage";
import TournamentsPage from "./pages/TournamentsPage";
import AboutPage from "./pages/AboutPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kluby" element={<ClubsListPage />} />
          <Route path="/klub/:id" element={<ClubDetailsPage />} />
          <Route path="/sparingpartnerzy" element={<SparingPartnersPage />} />
          <Route path="/turnieje" element={<TournamentsPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
