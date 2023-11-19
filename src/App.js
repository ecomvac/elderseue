import { useState } from 'react'
import './App.css'
import { Route, useLocation } from "react-router-dom";
import CustomRoutes from './Routes/CustomRoutes'
import { publicRoutes } from "./Routes/publicRoutes";
import { adminRoutes } from './Routes/SupportAgentRoutes';
import { superAdminRoutes } from './Routes/superAdminRoute';
import { adminRoutes } from './Routes/adminRoutes';
import { Toaster } from 'react-hot-toast';
import AdminDashboardLayout from './Layout/AdminDashboardLayout';
import AdminDashboardHome from './Pages/Admin/AdminDashboardHome';
import SupportAgentDasbhoardLayout from './Layout/SupportAgentDasbhoardLayout';
import SupportAgentDashboardHome from './Pages/SupportAgent/SupportAgentDashboardHome';
import SuperAdminDashboardLayout from './Layout/SuperAdminDashboardLayout';
import SuperAdminDashboardHome from './Pages/SuperAdmin/SuperAdminDashboardHome';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  return (
    <>
      <div>
        <CustomRoutes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          {/* ------------------------admin dashboard route--------------------- */}
          <Route
            path="/admin/dashboard"
            element={
              // <AuthSuperAdmin>
              <AdminDashboardLayout></AdminDashboardLayout>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<AdminDashboardHome />} />
            {adminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          {/* ------------------------support-agent dashboard route--------------------- */}
          <Route
            path="/support-agent/dashboard/"
            element={
              // <AuthSuperAdmin>
              <SupportAgentDasbhoardLayout></SupportAgentDasbhoardLayout>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<SupportAgentDashboardHome />} />
            {adminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          {/* -------------------super admin routing strat---------- */}
          <Route
            path="/super-admin/dashboard/"
            element={
              // <AuthSuperAdmin>
              <SuperAdminDashboardLayout></SuperAdminDashboardLayout>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<SuperAdminDashboardHome />} />
            {superAdminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          {/* -------------------super admin routing end---------- */}
        </CustomRoutes>

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>

    </>
  );
}

export default App;
