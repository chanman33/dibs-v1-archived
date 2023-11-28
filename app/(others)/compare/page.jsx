import dynamic from "next/dynamic";
import Compare from "@/components/compare";

export const metadata = {
  title: 'Compare || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <Compare />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
