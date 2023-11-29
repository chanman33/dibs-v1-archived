import dynamic from "next/dynamic";
import StepTwo from "@/components/apply/step-two"

export const metadata = {
  title: 'Next Step || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
    return (
        <>
            <StepTwo></StepTwo>
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });