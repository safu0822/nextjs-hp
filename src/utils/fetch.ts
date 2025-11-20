import { BlogPost } from "@/types/typeList";


export const blogDataFetch = async (): Promise<BlogPost[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await res.json();
  return post;
}