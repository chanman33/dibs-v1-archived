import dynamic from "next/dynamic";
import Gallery from "@/components/gallery";

export const metadata = {
  title: 'Gallery || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <Gallery />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
