import dynamic from "next/dynamic";
import ListingDetailsV2 from "@/components/listing-details-v2";

export const metadata = {
  title: 'Listing Single – Details V2 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <ListingDetailsV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
