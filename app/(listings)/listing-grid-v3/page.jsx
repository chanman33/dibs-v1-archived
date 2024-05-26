import dynamic from "next/dynamic";
import GridV3 from "@/components/listing-grid/grid-v3";

export const metadata = {
  title: 'Simple Listing – Grid V3 || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <GridV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
