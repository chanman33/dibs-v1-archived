import dynamic from "next/dynamic";
import Membership from "@/components/membership";

export const metadata = {
  title: 'Membership || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <Membership />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
