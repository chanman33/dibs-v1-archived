import dynamic from "next/dynamic";
import MySavedSearch from "@/components/dashboard/my-saved-search";

export const metadata = {
  title: 'My Saved Search || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <MySavedSearch />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
