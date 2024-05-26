import dynamic from "next/dynamic";
import ListV1 from "@/components/listing-list/list-v1";

export const metadata = {
  title: 'Simple Listing – List V1 || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <ListV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
