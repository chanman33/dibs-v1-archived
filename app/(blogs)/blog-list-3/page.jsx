import dynamic from "next/dynamic";
import BlogV3 from "@/components/blog-list-3";

export const metadata = {
  title: 'Blog Gid 3 || HomeHarbor - Real Estate & Agent Marketplace',
  description:
    'HomeHarbor - Real Estate & Agent Marketplace',
}

const index = () => {
  return (
    <>
      <BlogV3 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
