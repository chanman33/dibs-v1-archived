import dynamic from "next/dynamic";
import HomeMain from "@/components/home-2";

export const metadata = {
  title: 'Home-2 || Dibs - Real Estate & Agent Marketplace',
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
