"use client";
import { useState } from "react";
import Button from "./components/ui/Button";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTodo = todo.trim();
    if (trimmedTodo) {
      setTodos([...todos, trimmedTodo]);
      setTodo("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Welcome to My App</h1>
        <div className="flex gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
        <div className="flex gap-4">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </div>
      <form onSubmit={addTodo} className="mb-1">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a todo"
          className="border-2 border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add
        </button>
        <div className="m-2">
          <ul className="list-disc">
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button
                  className="ml-1 px-1 rounded bg-amber-800 text-white"
                  onClick={() => removeTodo(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </main>
  );
}
