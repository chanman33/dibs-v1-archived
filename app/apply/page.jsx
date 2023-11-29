import dynamic from "next/dynamic";
import Apply from "@/components/apply"

export const metadata = {
  title: 'Apply || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
    return (
        <>
            <Apply></Apply>
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });