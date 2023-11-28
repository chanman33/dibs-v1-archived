import dynamic from "next/dynamic";
import AgentV2 from "@/components/agent-view/agent-v2";

export const metadata = {
  title: 'Simple Listing – Agent V2 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <AgentV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
