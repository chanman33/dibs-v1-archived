import dynamic from "next/dynamic";
import ListingMapV2 from "@/components/listing-half-map/listing-map-v2";

export const metadata = {
  title: 'Listing - Map V2 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <ListingMapV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
