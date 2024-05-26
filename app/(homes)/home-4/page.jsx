import dynamic from "next/dynamic";
import HomeMain from "@/components/home-4";

export const metadata = {
  title: 'Home | Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
