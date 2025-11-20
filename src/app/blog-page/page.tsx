import Standard from "@/components/organisms/standard";
import { blogDataFetch } from "@/utils/fetch";
import type { Metadata } from "next";
import Post from "@/components/organisms/Post";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "ブログページ",
};

export default async function BlogPage() {
  const blogData = await blogDataFetch();
  return (
    <Standard>
      <ul className="m-10">
        {blogData && blogData.map((blog) => <Post key={blog.id} post={blog} />)}
      </ul>
    </Standard>
  );
}
