import dynamic from "next/dynamic";
import HomeMain from "@/components/home-9";

export const metadata = {
  title: 'Home-9 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
