import dynamic from "next/dynamic";
import MyPackage from "@/components/dashboard/my-package";

export const metadata = {
  title: 'My Package || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <MyPackage />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
