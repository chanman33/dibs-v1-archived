import dynamic from "next/dynamic";
import CreateListing from "@/components/dashboard/create-listing";

export const metadata = {
  title: 'Create Listing || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <CreateListing />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
