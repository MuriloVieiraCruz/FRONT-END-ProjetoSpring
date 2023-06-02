import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getDecrypted } from "../utils/crypto";

export default function RequireAuth({allowedRoles}) {
    const location = useLocation();

    const LOCAL_DATA = getDecrypted(localStorage.getItem("user"));

    const PERMISSION = LOCAL_DATA?.permissao ? LOCAL_DATA.permissao : 0;

    return allowedRoles.some((el) => [PERMISSION].includes(el)) ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }}/>
    );
}