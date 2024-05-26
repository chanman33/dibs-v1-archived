import dynamic from "next/dynamic";
import Login from "@/components/login";

export const metadata = {
  title: 'Login || Dibs - Real Estate & Agent Marketplace',
  description:
    'Dibs - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
