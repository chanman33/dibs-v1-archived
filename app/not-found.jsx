


import dynamic from "next/dynamic";
import NotFound from "@/components/404";

export const metadata = {
  title: '404 Not Found || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
