import { Navigate, Outlet } from "react-router-dom"
const isAuthenticated = false
function ProtectedRoute() {
    return isAuthenticated ? <Outlet /> : <Navigate to='/authenticate' />
}
function PublicRoute() {
    return isAuthenticated ? <Navigate to='/' /> : <Outlet />
}
export {ProtectedRoute, PublicRoute} 