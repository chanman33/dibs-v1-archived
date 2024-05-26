import dynamic from "next/dynamic";
import ParallaxStyle from "@/components/listing-style/parallax-style";

export const metadata = {
  title: 'Listing - Parallax Style || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <ParallaxStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
