import dynamic from "next/dynamic";
import MyProfile from "@/components/dashboard/my-profile";

export const metadata = {
  title: 'My Profile || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <MyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
