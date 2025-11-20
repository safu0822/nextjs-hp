import { BlogPost } from "@/types/typeList";
import Link from "next/link";

const Post = ({ post }: { post: BlogPost }) => {
  return (
    <div>
      <Link href={`/blog-page/${post.id}`}>
        <span>{post.id}</span>
        {" : "}
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
};

export default Post;
