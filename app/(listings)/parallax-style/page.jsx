import dynamic from "next/dynamic";
import ParallaxStyle from "@/components/listing-style/parallax-style";

export const metadata = {
  title: 'Listing - Parallax Style || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <ParallaxStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
