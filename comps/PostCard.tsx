import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function PostCard({
  post,
}: {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>{post.body}</CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <Link href={`/posts/${post.id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
