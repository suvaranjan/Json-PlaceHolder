import { getPosts } from "@/api/posts";
import PostCard from "@/comps/PostCard";

export default async function MyPosts() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div className="flex justify-center" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
