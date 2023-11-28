import dynamic from "next/dynamic";
import BlogV1 from "@/components/blog-list-1";

export const metadata = {
  title: 'Blog List 1 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <BlogV1 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
