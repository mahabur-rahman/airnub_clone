import "./index.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// react router dom
import { Route, Routes } from "react-router-dom";
// pages | component
import IndexPage from "./pages/IndexPage";
import Layout from "./pages/Laout";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { UserContextProvider } from "./context/UserContext";
import ProfilePage from "./pages/profilePage/ProfilePage";
import PlacesPage from "./pages/account/PlacesPage";
import PlacesFormPage from "./pages/placesFormPage/PlacesFormPage";
import BookingsPage from "./pages/bookings/BookingsPage";
import SinglePlacePage from "./pages/singlePlacePage/SinglePlacePage";
import SingleBookings from "./pages/singleBookings/SingleBookings";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<SinglePlacePage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<SingleBookings />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
