import dynamic from "next/dynamic";
import GridV1 from "@/components/listing-grid/grid-v1";

export const metadata = {
  title: 'Simple Listing – Grid V1 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <GridV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
