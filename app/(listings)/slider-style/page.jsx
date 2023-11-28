import dynamic from "next/dynamic";
import SliderStyle from "@/components/listing-style/slider-style";

export const metadata = {
  title: 'Listing - Slider Style || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <SliderStyle />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
