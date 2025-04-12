"use client";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ユーザー情報", form);
    setMessage("ユーザー登録を完了しました！");
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="p-4 font-sans">
      <h1 className="text-2xl font-bold">ユーザー登録</h1>
      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="block">
            名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="block">
            パスワード
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          登録
        </button>
      </form>
    </div>
  );
}
