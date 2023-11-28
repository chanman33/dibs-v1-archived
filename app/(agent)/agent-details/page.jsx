import dynamic from "next/dynamic";
import AgentDetails from "@/components/agent-details";

export const metadata = {
  title: 'Agent Details || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <AgentDetails />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
