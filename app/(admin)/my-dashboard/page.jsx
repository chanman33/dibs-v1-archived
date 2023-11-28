import dynamic from "next/dynamic";
import MyDashboard from "@/components/dashboard/my-dashboard";

export const metadata = {
  title: 'Dashboard || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}


const index = () => {
  return (
    <>
      <MyDashboard />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
