import Standard from "@/components/organisms/standard";
import { BlogPost } from "@/types/typeList";
import type { Metadata } from "next";
import { blogDataFetch } from "@/utils/fetch";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "ブログページ",
};

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );

  return posts.map((post: BlogPost) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogContentsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const contents = await blogDataFetch();
  const post = contents.find((post) => post.id === Number(id));

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Standard>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Standard>
  );
}
