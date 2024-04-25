import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import HomePage from "../pages/HomePage/HomePage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/comments/:postId" element={<CommentsPage />} />
        <Route index element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
