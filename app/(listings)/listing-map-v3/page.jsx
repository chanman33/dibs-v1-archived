import dynamic from "next/dynamic";
import ListingMapV3 from "@/components/listing-half-map/listing-map-v3";

export const metadata = {
  title: 'Listing - Map V3 || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <ListingMapV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
