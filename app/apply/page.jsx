import dynamic from "next/dynamic";
import Apply from "@/components/apply"

export const metadata = {
  title: 'Apply || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
    return (
        <>
            <Apply></Apply>
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });