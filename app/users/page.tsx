import { getUsers } from "@/api/user";
import Link from "next/link";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Users() {
  return (
    <div className="container mx-auto p-10 lg:mx-10">
      {/* <h1 className="text-3xl font-bold text-center mb-8">Users</h1> */}
      <Suspense fallback={<UsersLoading />}>
        <FetchUsers />
      </Suspense>
    </div>
  );
}

async function FetchUsers() {
  const users = await getUsers();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ol className="list-decimal list-inside space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              href={`users/${user.id}`}
              className="text-blue-600 hover:underline ml-2"
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

function UsersLoading() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <ol className="list-decimal list-inside space-y-2">
        {[...Array(10)].map((_, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">{index + 1}.</span>
            <Skeleton className="h-4 w-[200px] ml-2" />
          </li>
        ))}
      </ol>
    </div>
  );
}
