import dynamic from "next/dynamic";
import MapHeader from "@/components/listing-style/map-header";

export const metadata = {
  title: 'Listing - Map Header || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <MapHeader />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
