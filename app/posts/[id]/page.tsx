import { Suspense } from "react";
import { getPostComments, getSinglePost } from "@/api/posts";
import Link from "next/link";
import { getUser } from "@/api/user";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function PostLoadingFallback() {
  return (
    <div className="container mx-auto p-4">
      <Skeleton className="h-10 w-3/4 mb-4" />
      <div className="flex items-center mb-4">
        <span className="mr-2">By: </span>
        <Skeleton className="h-4 w-32" />
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

function UserLoadingFallback() {
  return <Skeleton className="h-4 w-32 inline-block" />;
}

function CommentsLoadingFallback() {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <Skeleton className="h-4 w-1/4 mb-2" />
            <Skeleton className="h-3 w-full mb-1" />
            <Skeleton className="h-3 w-full mb-1" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

async function PostContent({ id }: { id: string }) {
  const post = await getSinglePost(id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <span className="mb-4 block">
        {"By: "}
        <Suspense fallback={<UserLoadingFallback />}>
          <UserDetails userId={post.userId} />
        </Suspense>{" "}
      </span>
      <p className="text-lg mb-8 text-foreground">{post.body}</p>
    </div>
  );
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="lg:px-10">
      <Suspense fallback={<PostLoadingFallback />}>
        <PostContent id={params.id} />
      </Suspense>
      <Suspense fallback={<CommentsLoadingFallback />}>
        <Comments postId={params.id} />
      </Suspense>
    </div>
  );
}

async function UserDetails({ userId }: { userId: number }) {
  const user = await getUser(userId);

  return (
    <Link href={`/users/${userId}`} className="text-blue-500 hover:underline">
      {user.name}
    </Link>
  );
}

async function Comments({ postId }: { postId: string }) {
  const comments = await getPostComments(postId);

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4 last:mb-0">
            <h4 className="text-md font-semibold">{comment.name}</h4>
            <p className="text-sm mb-1">{comment.body}</p>
            <p className="text-xs text-muted-foreground">{comment.email}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
