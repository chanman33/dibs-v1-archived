import dynamic from "next/dynamic";
import MyMessage from "@/components/dashboard/my-message";

export const metadata = {
  title: 'My Message || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <MyMessage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
