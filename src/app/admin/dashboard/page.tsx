import type { Metadata } from "next";
import DashboardClient from "./Client";

export const metadata: Metadata = {
  title: "Feht Health - Dashboard",
};
const Dashboard = () => {
  return <DashboardClient />;
};

export default Dashboard;
