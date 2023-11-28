import dynamic from "next/dynamic";
import Terms from "@/components/terms-conditions";

export const metadata = {
  title: 'Terms & Conditions || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <Terms />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
