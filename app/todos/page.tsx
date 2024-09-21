import { getTodos } from "@/api/todos";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Todos() {
  return (
    <div className="container mx-auto p-4 lg:px-10">
      <h1 className="text-3xl font-bold mb-8">Todos</h1>
      <Suspense fallback={<TodosLoadingFallback />}>
        <FetchTodos />
      </Suspense>
    </div>
  );
}

function TodosLoadingFallback() {
  return (
    <ul className="list-decimal pl-8 space-y-4">
      {[...Array(10)].map((_, index) => (
        <li key={index} className="text-lg">
          <Skeleton className="h-6 w-full max-w-[500px]" />
        </li>
      ))}
    </ul>
  );
}

async function FetchTodos() {
  const todos = await getTodos();

  return (
    <ul className="list-decimal pl-8 space-y-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`text-lg ${
            todo.completed
              ? "line-through text-muted-foreground"
              : "text-foreground"
          }`}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
