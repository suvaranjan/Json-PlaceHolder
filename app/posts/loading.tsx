import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPosts() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex justify-center" key={index}>
            <SkeletonCard />
          </div>
        ))}
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
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
  );
}
