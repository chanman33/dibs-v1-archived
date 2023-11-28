import dynamic from "next/dynamic";
import BlogV2 from "@/components/blog-list-2";

export const metadata = {
  title: 'Blog List 2 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <BlogV2 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
