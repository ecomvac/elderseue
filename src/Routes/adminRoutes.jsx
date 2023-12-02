import AdminSupportAgents from "../Pages/Admin/AdminSupportAgents";
import SupportAgentsElderly from "../Pages/SupportAgent/SupportAgentsElderly";
import SupportAgentsElderlySinglePage from "../Pages/SupportAgent/SupportAgentsElderlySinglePage";



export const adminRoutes = [
    // manage users
   { path: "Support-Agents", Component: AdminSupportAgents },
    { path: "elderly", Component: SupportAgentsElderly },
    { path: "elderly/:id", Component: SupportAgentsElderlySinglePage }, 
];


