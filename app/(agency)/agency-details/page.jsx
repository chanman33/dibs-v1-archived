import dynamic from "next/dynamic";
import AgencyDetails from "@/components/agency-details";

export const metadata = {
  title: 'Agency Details || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <AgencyDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
