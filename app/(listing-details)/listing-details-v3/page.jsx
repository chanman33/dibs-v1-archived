import dynamic from "next/dynamic";
import ListingDetailsV3 from "@/components/listing-details-v3";

export const metadata = {
  title: 'Listing Single – Details V3 || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <ListingDetailsV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
