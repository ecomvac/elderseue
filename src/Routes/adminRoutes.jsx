import AdminElderlySinglePage from "../Pages/Admin/AdminElderlySinglePage";
import AdminSupportAgents from "../Pages/Admin/AdminSupportAgents";



export const adminRoutes = [
    // manage users
   { path: "Support-Agents", Component: AdminSupportAgents },
    /*  { path: "elderly", Component: AdminElderly },*/
    { path: "elderly/:id", Component: AdminElderlySinglePage }, 
];


