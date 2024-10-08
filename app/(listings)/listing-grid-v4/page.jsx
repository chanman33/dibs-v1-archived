import dynamic from "next/dynamic";
import GridV4 from "@/components/listing-grid/grid-v4";

export const metadata = {
  title: 'Simple Listing – Grid V4 || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <GridV4 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
