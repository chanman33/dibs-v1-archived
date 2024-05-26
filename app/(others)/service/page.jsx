import dynamic from "next/dynamic";
import Service from "@/components/service";

export const metadata = {
  title: 'Service || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <Service />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
