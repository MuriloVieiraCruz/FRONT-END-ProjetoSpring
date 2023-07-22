import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mod from "../pages/Mod";
import NewPost from "../pages/NewPost";
import RequireAuth from "../components/RequireAuth"
import Login from "../components/login"
import "../style/login.css";
import "../style/Mod.css";
import "../style/NewPost.css";
import "../style/Home.css";

const ROLES = {
    admin: 1,
  };

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/new" element={<NewPost />} />
                <Route path="/login" element={<Login />} />
                <Route element={<RequireAuth  allowedRoles={[ROLES.admin]}  />}>
                    <Route path="/mod" element={<Mod />} />
                </Route>
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}