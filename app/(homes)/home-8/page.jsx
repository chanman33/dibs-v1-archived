import dynamic from "next/dynamic";
import HomeMain from "@/components/home-8/Home8";

export const metadata = {
  title: 'Home-8 || Dibs - Real Estate & Agent Marketplace',
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
