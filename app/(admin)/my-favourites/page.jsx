import dynamic from "next/dynamic";
import MyFavourites from "@/components/dashboard/my-favourites";

export const metadata = {
  title: 'My Favourites || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}


const index = () => {
  return (
    <>
      <MyFavourites />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
