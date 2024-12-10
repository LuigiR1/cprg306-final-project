"use client";
export default function Login() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <p>Log into your existing account or create a new one.</p>
      <button
        onClick={() => alert("Login functionality to be implemented")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Log in with GitHub
      </button>
    </div>
  );
}
