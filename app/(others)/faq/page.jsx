import dynamic from "next/dynamic";
import Faq from "@/components/faq";

export const metadata = {
  title: 'Faq || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
