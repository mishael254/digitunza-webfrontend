
import Dashboard from "views/Dashboard.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Projects from "views/Projects";
import Projectdetails from "views/Projectdetails";
import Createproject from "views/Createproject";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: "tim-icons icon-app",
    component: <Projects />,
    layout: "/admin",
  },
  {
    path: "/projects-details/:projectName",
    name: "Projects-details",
    icon: "tim-icons icon-globe-2",
    component: <Projectdetails />,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-pin",
    component: <Map />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: <Typography />,
    layout: "/admin",
  },
  {
    path: "/create-project",
    name: "Create project",
    icon: "tim-icons icon-tap-02",
    component: <Createproject />,
    layout: "/admin",
  },
  
];
export default routes;
