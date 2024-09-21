import { Suspense } from "react";
import { getUser, getUserPosts } from "@/api/user";
import Link from "next/link";
import PostCard from "@/comps/PostCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function UserDetailsLoadingFallback() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-6 w-3/4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {[...Array(6)].map((_, index) => (
          <Skeleton key={index} className="h-4 w-full" />
        ))}
      </CardContent>
    </Card>
  );
}

function UserPostsLoadingFallback() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">User Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(3)].map((_, index) => (
          <div className="flex flex-col space-y-3 w-[350px] h-[200px] border rounded-sm	p-2">
            <Skeleton className="h-4 w-full rounded-xl mb-2" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <div className="self-end">
              <Skeleton className="h-[30px] w-[70px] mb-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page({ params }: { params: { id: number } }) {
  return (
    <div className="container mx-auto px-4 py-8 lg:mx-10">
      <Suspense fallback={<UserDetailsLoadingFallback />}>
        <UserDetails id={params.id} />
      </Suspense>

      <Suspense fallback={<UserPostsLoadingFallback />}>
        <UserPosts userId={params.id} />
      </Suspense>
    </div>
  );
}

async function UserDetails({ id }: { id: number }) {
  const user = await getUser(id);

  return (
    <Card className="max-w-[400px]">
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Username: {user.username}
        </p>
        <p className="text-sm text-muted-foreground">Email: {user.email}</p>
        <p className="text-sm text-muted-foreground">Phone: {user.phone}</p>
        <p className="text-sm text-muted-foreground">Website: {user.website}</p>
        <p className="text-sm text-muted-foreground">
          Address: {user.address.street}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
        <p className="text-sm text-muted-foreground">
          Company: {user.company.name}
        </p>
      </CardContent>
    </Card>
  );
}

async function UserPosts({ userId }: { userId: number }) {
  const posts = await getUserPosts(userId);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">User Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
