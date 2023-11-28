import dynamic from "next/dynamic";
import GridV2 from "@/components/listing-grid/grid-v2";

export const metadata = {
  title: 'Simple Listing – Grid V2 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <GridV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
