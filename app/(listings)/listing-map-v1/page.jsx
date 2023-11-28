import dynamic from "next/dynamic";
import ListingMapV1 from "@/components/listing-half-map/listing-map-v1";

export const metadata = {
  title: 'Listing - Map V1 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <ListingMapV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
