import dynamic from "next/dynamic";
import SignUp from "@/components/register";

export const metadata = {
  title: 'SignUp || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
