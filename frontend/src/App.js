import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClubsListPage from "./pages/ClubsListPage";
import ClubDetailsPageNew from "./pages/ClubDetailsPageNew";
import SparingPartnersPage from "./pages/SparingPartnersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProfileDataPage from "./pages/ProfileDataPage";
import EditProfilePage from "./pages/EditProfilePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import DeleteAccountPage from "./pages/DeleteAccountPage";
import TournamentsPage from "./pages/TournamentsPage";
import AboutPage from "./pages/AboutPage";
import AllPagesPage from "./pages/AllPagesPage";
import CooperationPage from "./pages/CooperationPage";
import MobileAppPage from "./pages/MobileAppPage";
import ContactPage from "./pages/ContactPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import MyReservationsPage from "./pages/MyReservationsPage";
import PassesPage from "./pages/PassesPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kluby" element={<ClubsListPage />} />
          <Route path="/klub/:id" element={<ClubDetailsPageNew />} />
          <Route path="/sparingpartnerzy" element={<SparingPartnersPage />} />
          <Route path="/turnieje" element={<TournamentsPage />} />
          <Route path="/o-nas" element={<AboutPage />} />
          <Route path="/wspolpraca" element={<CooperationPage />} />
          <Route path="/aplikacja-mobilna" element={<MobileAppPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/polityka-cookies" element={<CookiePolicyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/profil/dane" element={<ProfileDataPage />} />
          <Route path="/profil/edytuj" element={<EditProfilePage />} />
          <Route path="/profil/zmien-haslo" element={<ChangePasswordPage />} />
          <Route path="/profil/usun-konto" element={<DeleteAccountPage />} />
          <Route path="/profil/rezerwacje" element={<MyReservationsPage />} />
          <Route path="/profil/karnety" element={<PassesPage />} />
          <Route path="/wszystkie" element={<AllPagesPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
